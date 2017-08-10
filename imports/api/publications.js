import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { Debates } from './schemas/debates';
import { Organizations } from './schemas/organizations';
import { UserAtDebate } from './schemas/user-at-debate';

export { Debates, Organizations, UserAtDebate };

if (Meteor.isServer) {

  Meteor.publish('debates', function debatesPublication() {
    return Debates.find();
  })

  Meteor.publish('organizations', function organizationPublication() {
    return Organizations.find();
  })

  Meteor.publish('userAtDebate', function userAtDebatePublication() {
    return UserAtDebate.find();
  })

  Meteor.publish('users', function userPublication() {
    return Meteor.users.find();
  })

}
