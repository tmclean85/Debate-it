import { allReset, allInsertOne } from './helpers/all';
import { debateInsert } from './helpers/debates';
import { userInsert, userList } from './helpers/user';

// All

Meteor.methods({
  'debate.insert'(item) {
    debateInsert({
      question: item.question,
      yesUser_id: item.yesUser_id,
      yesBecause: item.yesBecause,
      noUser_id: item.noUser_id,
      noBecause: item.noBecause,
      location: item.location,
      start: item.start,
      end: item.end
    });
  }
});

Meteor.methods({
  'test.reset'() {
    allReset();
  }
});

Meteor.methods({
  'test.insertOne'() {
    allInsertOne();
  }
});

Meteor.methods({
  'user.insert'(item) {
    userInsert({
      email: item.email,
      password: item.password,
      name: item.name,
      bio: item.bio
    });
  }
});

Meteor.methods({
  'user.getLogged'() {
    return {
      id: '1',
      name: 'what I want when I want'
    }
  }
});

