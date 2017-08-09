import { allReset, allInsertOne } from './helpers/all';
import { userLogin } from './helpers/user';

// All

Meteor.methods({
  'test.reset'(item) {
    allReset();
  }
});

Meteor.methods({
  'test.insertOne'(item) {
    allInsertOne();
  }
});

Meteor.methods({
  'user.login'(form) {
    userLogin({
      email: 'james@test.com',
      password: '1q2w3e'
    });
  }
})