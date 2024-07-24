import { relations } from 'drizzle-orm';
import {
    pgTable,
    serial,
    varchar,
    integer,
    boolean
} from 'drizzle-orm/pg-core';

// table of users
export const users = pgTable('users', {
    uid: serial('uid').primaryKey(),
    handle: varchar('handle').notNull(),
    display_name: varchar('display_name'),
    email: varchar('email'),
    password: varchar('password')
});

// table of recipes
export const recipes = pgTable('recipes', {
    rid: serial('rid').primaryKey(),
    uid: integer('uid').notNull(),
    title: varchar('title').notNull(),
    description: varchar('description'),
    ingredients: varchar('ingredients').notNull(),
    directions: varchar('directions').notNull(),
    ref_img: varchar('ref_img'),
    visibility: boolean('visibility')
});

// table of a user's followers and following
export const follower_following = pgTable('follower_following', {
    uid: integer('uid').primaryKey(),
    followers: varchar('followers'),
    following: varchar('following')
});