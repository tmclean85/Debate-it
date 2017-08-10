import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

// import { userLogged } from './helpers/user';

import { Debates } from './schemas/debates';
import { Organizations } from './schemas/organizations';
import { Users } from './schemas/users';
import { UserAtDebate } from './schemas/user-at-debate';

// TODO: Remove in secure api
export { Debates, Organizations, Users, UserAtDebate };

const UserProfile = new Mongo.Collection(null);

if (Meteor.isServer) {

  // debates

  Meteor.publish('debates', function debatesPublication() {
    // Provisory
    return Debates.find();
  })

  // organizations

  Meteor.publish('organizations', function organizationPublication() {
    return Organizations.find();
  })

  // users

  Meteor.publish('users', function users2Publication() {
    // Provisory
    return Users.find();
  })

  Meteor.publish('users.profile', function users2Publication() {
    return UsersProfile.find({});
  })

  // userAtDebate

  Meteor.publish('userAtDebate', function userAtDebatePublication() {
    // Provisory
    return UserAtDebate.find();
  })

  Meteor.methods({
    'userAtDebate.insert'(item) {

      try {
        /*
        Validation
          item.user_id;
          item.debate_id;
          item.confByYes,;
          item.confByNo;
        */

        return userAtDebate.insert({
          user_id: item.user_id,
          debate_id: item.debate_id,
          confByYes: item.confByYes, 
          confByNo: item.confByNo, 
          vote: null, 
          because: '', 
          goodPointsYes: 0,
          goodPointsNo: 0
        });
      } catch(e) {
        throw new Meteor.Error(e);
      }
    }
  });
  
  Meteor.publish('users.list', function() {
    return Meteor.users.find({});
  });
}
