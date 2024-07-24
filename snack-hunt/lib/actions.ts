'use server'
import { db } from './db/db';
import {
    users,
    recipes,
    follower_following
} from './db/schema'
import { eq } from 'drizzle-orm'

export const getUserById = async (uid: number) => {
    try {
        const res = await db
            .select()
            .from(users)
            .where(eq(users.uid, uid))
            .execute()
        return res;
    } catch (error) {
        console.error('Could not get user by id: ', error);
        throw error;
    }
}

export const getRecipeById = async (rid: number) => {
    try {
        const res = await db
            .select()
            .from(recipes)
            .where(eq(recipes.rid, rid))
            .execute()
        return res;
    } catch (error) {
        console.error('Could not get recipe by id: ', error);
        throw error;
    }
}

export const getFollowersById = async (uid: number) => {
    try {
        const res = await db
            .select({
                followers: follower_following.followers
            })
            .from(follower_following)
            .where(eq(follower_following.uid, uid))
            .execute()
        return res;
    } catch (error) {
        console.error('Could not get followers by id: ', error)
    }
}

export const getFollowingById = async (uid: number) => {
    try {
        const res = await db
            .select({
                following: follower_following.following
            })
            .from(follower_following)
            .where(eq(follower_following.uid, uid))
            .execute()
        return res;
    } catch (error) {
        console.error('Could not get following by id: ', error)
    }
}