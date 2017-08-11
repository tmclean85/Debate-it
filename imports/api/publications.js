import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { Debates } from './schemas/debates';
import { Organizations } from './schemas/organizations';
import { UserAtDebate } from './schemas/user-at-debate';

import { debateGetIdByNum }  from './helpers/debates';

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

  // Meteor.publish('debateWithAttendees', function debateWithAttendeesPublication(num) {
  //   console.log('debateWithAttendees was called');
  //   const id = debateGetIdByNum(num);
  //   console.log('id', debateGetIdByNum(num));
  //   const debateWithAttendees = Debates.aggregate([
  //   {
  //     $lookup:
  //       {
  //         from: "users",
  //         localField: "yesUser_id",
  //         foreignField: "_id",
  //         as: "yesUser"
  //       }
  //     }
  //   ]);
  //   console.log(debateWithAttendees);
  //   return debateWithAttendees.find({ _id: id});
  // })

}
