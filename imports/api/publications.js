import { Mongo } from 'meteor/mongo';

export const Organizations = new Mongo.Collection('organizations');
export const Users = new Mongo.Collection('users');
export const Debates = new Mongo.Collection('debates');
export const UserAtDebate = new Mongo.Collection('userAtDebate');
