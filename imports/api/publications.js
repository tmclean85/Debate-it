import { Mongo } from 'meteor/mongo';

export const Organizations = new Mongo.Collection('organizations');
export const Users = new Mongo.Collection('users');
export const Debates = new Mongo.Collection('debates');
export const UserAtDebate = new Mongo.Collection('userAtDebate');

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

  Meteor.publish('users', function usersPublication() {
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

}

