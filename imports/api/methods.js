import { allReset, allInsertOne } from './helpers/all';
import { debateInsert } from './helpers/debates';
import { userInsert, userList } from './helpers/user';
import { userAtDebateInsert } from './helpers/user-at-debate';

// All

Meteor.methods({
  'debate.insert'(item) {
    // For DebateCreate component
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
    // For Test component
    allReset();
  }
});

Meteor.methods({
  'test.insertOne'() {
    // For Test component
    allInsertOne();
  }
});

Meteor.methods({
  'user.insert'(item) {
    // For SignUp component
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
    // TODO: To be used in a component to be determined, when someone signs up for a deabte
    userAtDebateInsert({
      user_id: item.user_id,
      debate_id: item.debate_id
    });
  }
})


