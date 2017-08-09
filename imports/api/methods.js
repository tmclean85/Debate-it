import { allReset, allInsertOne } from './helpers/all';

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