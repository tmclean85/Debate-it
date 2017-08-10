import { allReset, allInsertOne } from './helpers/all';
import { debateInsert } from './helpers/debates';
import { userInsert, userList } from './helpers/user';
import { unsertUserAtDebate } from './helpers/user-at-debate';

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

// Users

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

// UsersAtDebate

Meteor.methods({
  'userAtDebate.insert'(item) {
    return userAtDebateInsert({
      user_id: item.user_id,
      debate_id: item.debate_id
    });
  }
})


