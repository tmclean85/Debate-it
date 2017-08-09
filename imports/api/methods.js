import { allReset, allInsertOne } from './helpers/all';
import { debateInsert } from './helpers/debates';

// All

Meteor.methods({
  'debate.insert'(item) {
    console.log('will insert debate, publ', item);
    debateInsert(item);
  }
});

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
