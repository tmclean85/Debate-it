import { Mongo } from 'meteor/mongo';

import { Debates, debatesInit } from '../schemas/debates';
import { Organizations, organizationsInit } from '../schemas/organizations';
import { Users, userInit } from '../schemas/users';
import { UserAtDebate, userAtDebateInit } from '../schemas/user-at-debate';

if (Meteor.isServer) {

  // All

  Meteor.methods({
    'all.reset'() {
      try {

        Debates.remove({});
        debatesInit.forEach(item => Debates.insert(item));

        Organizations.remove({});
        Organizations.insert(organizationsInit[0]);

        UserAtDebate.remove({});
        userAtDebateInit.forEach(item => UserAtDebate.insert(item));

        console.log('will reset users');
        Users.remove({});
        userInit.forEach(item => Users.insert(item));

        return 'ok';

      } catch(e) {
        throw new Meteor.Error(e);
      }
    }
  });

  Meteor.methods({
    'all.insertOne'() {
      try {

        Debates.insert({
          question: 'test', 
          yesUser_id: '1', 
          yesBecause: 'test test test',
          noUser_id: '2',
          noBecause: 'test test test test',
          organization: { 
            name: 'Red', 
            address: '1490'
          }, 
          location: 'Kitchen',
          start: '2017-09-01 19:00:00', 
          end: '2017-09-02 20:00:00'
        });

        Organizations.insert({
          name: "Red",
          address: "1490"
        });

        UserAtDebate.insert({
          user_id: '3',
          debate_id: '1',
          confByYes: true, 
          confByNo: true, 
          vote: false, 
          because: 'because',
          goodPointsYes: 3,
          goodPointsNo: 2
        });

        Users.insert({
          name: 'name',
          email: 'email',
          bio: 'bio', 
          goodPoints: 11,
          wins: 22,
          losses: 33
        });

        return 'ok';

      } catch(e) {
        throw new Meteor.Error(e);
      }
    }
  });

}