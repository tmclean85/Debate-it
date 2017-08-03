import { Mongo } from 'meteor/mongo';

export const Organizations = new Mongo.Collection('organizations');
export const Users = new Mongo.Collection('users');
export const Debates = new Mongo.Collection('debates');
export const UserAtDebate = new Mongo.Collection('userAtDebate');

if (Meteor.isServer) {
  Meteor.publish('organizations', function organizationPublication() {
    return Organizations.find();
  })

  Meteor.publish('users', function usersPublication() {
    return Users.find();
  })

  Meteor.publish('debates', function debatesPublication() {
    return Debates.find();
  })

  Meteor.publish('userAtDebate', function userAtDebatePublication() {
    return UserAtDebate.find();
  })
}

