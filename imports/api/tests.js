import { Mongo } from 'meteor/mongo';
import {
  Organizations,
  Users,
  Debates,
  UserAtDebate
} from './publications';

if (Meteor.isServer) {

  // All

  Meteor.methods({
    'all.reset'() {
      try {

        Debates.remove({});
        Debates.insert({
          question: 'Will the world end next year', 
          yesUser_id: '1', 
          yesBecause: 'The world it so more messed up then Noahs time a the flood should have already came and will/should happen at eny moment, certainly before the end of this year',
          noUser_id: '2',
          noBecause: 'The world was a mess since the down of time and will always be',
          organization: { 
            name: 'Red Academy', 
            address: '1490 W Broadway #200, Vancouver, BC V6H 4E8'
          }, 
          location: 'Kitchen in the second floor',
          start: '2017-09-01 19:00:00', 
          end: '2017-09-02 20:00:00'
        });

        Organizations.remove({});
        Organizations.insert({
          name: "Red Academy",
          address: "1490 W Broadway #200, Vancouver, BC V6H 4E8"
        });

        UserAtDebate.remove({});
        UserAtDebate.insert({
          user_id: '3',
          debate_id: '1',
          confByYes: true, 
          confByNo: true, 
          vote: false, 
          because: 'was allways messy so will not end', 
          goodPointsYes: 3,
          goodPointsNo: 2
        });

        Users.remove({});
        Users.insert({
          name: 'Charlie',
          email: 'charlie@test.com',
          bio: 'I am becoming an app developer and will make stuff in the internet', 
          goodPoints: 99,
          wins: 1,
          losses: 0,
        });
        Users.insert({
          name: 'Trevor',
          email: 'trevor@test.com',
          bio: 'I am becoming an app developer and will make things in the internet',
          goodPoints: 98,
          wins: 1,
          losses: 0
        });

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