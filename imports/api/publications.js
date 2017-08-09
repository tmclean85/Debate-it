import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { Debates } from './schemas/debates';
import { Organizations } from './schemas/organizations';
import { Users } from './schemas/users';
import { UserAtDebate } from './schemas/user-at-debate';

// TODO: Remove in secure api
export { Debates, Organizations, Users, UserAtDebate };

if (Meteor.isServer) {

  // debates

  Meteor.publish('debates', function debatesPublication() {
    // Provisory
    return Debates.find();
  })

  Meteor.methods({
    'debate.insert'(item) {

      try {
        /*
        Validation
          item.question;
          item.yesUser_id;
          item.yesBecause;
          item.noUser_id;
          item.noBecause;
          item.organization.name;
          item.location;
          item.start;
          item.end;
        */

        return Debates.insert({
          question: item.question, 
          yesUser_id: item.yesUser_id, 
          yesBecause: item.yesBecause,
          noUser_id: item.noUser_id,
          noBecause: item.noBecause,
          organization: { 
            name: item.organization.name, 
            address: 'get from organizations'
          }, 
          location: item.location,
          start: item.start, 
          end: item.end
        });
      } catch(e) {
          throw new Meteor.Error(e);
      }
      }
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

  Meteor.methods({
    'user.insert'(item) {
      try {
        /*
        Validation
          item.name;
          item.email;
          item.bio;
        */

        return Users.insert({
          name: item.name,
          email: item.email,
          bio: item.bio
        });
      } catch(e) {
        throw new Meteor.Error(e);
      }
    }
  });

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
