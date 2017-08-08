import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  console.log('startup');
  console.log(Meteor.users);
  if ( Meteor.users.find().count() === 0 ) {
    console.log('no user');
    user = Accounts.createUser({
      email : 'super@example.com',
      password : '1q2w3e',
    });
  }
});