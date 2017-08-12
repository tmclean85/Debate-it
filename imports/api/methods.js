import { allReset, allInsertOne } from './helpers/all';
import { debateInsert, debateUpdate, debateProfileGet } from './helpers/debates';
import { userGetProfile, userInsert, userList, userUpdate, userRecalcScore } from './helpers/user';
import { userAtDebateInsert, userAtDebateVote } from './helpers/user-at-debate';

// Debates

Meteor.methods({
  'debate.insert'(item) {
    // TODO: retest

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

Meteor.methods({
  'debates.getProfile'(id) {
    return debateProfileGet(id);
  }
})

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
    // implement and test
    // For SignUp component
    userInsert({
      email: item.email,
      password: item.password,
      name: item.name,
      bio: item.bio
    });
  }
});

Meteor.methods({
  'user.getProfile'(id) {
    return userGetProfile(id);
  }
})

Meteor.methods({
  'user.recalcscore'(id) {
    return userRecalcScore(id);
  }
})


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

// The below methods are not tested and some incomplete, but they should be all the MVP needs

Meteor.methods({
  'debate.remove'(debateId, loggedId) {
    // TODO: implement and test
    // By yesUser or noUser (later maybe only before the debate.start)
    return debateRemove(debateId, loggedId)
  }
})

Meteor.methods({
  'debate.update'(debate, loggedId) {
    // TODO: implement and test
    // Update if loggedId is yesUser_id or noUser_id
    return debateUpdate(
      {
        question: debate.question, 
        yesBecause: debate.yesBecause,
        noBecause: debate.noBecause,
        location: debate.location,
        start: debate.start, 
        end: debate.end
      },
      loggedId
    )
  }
})

Meteor.methods({
  'user.update'(name, bio, loggedId) {
    // TODO: implement and test
    return userUpdate(name, bio, loggedId);
  }
})

Meteor.methods({
  'userAtDebate.confirm'(userId, debateId, loggedId) {
    // TODO: implement and test
    // Update to true userAtDebate.confByYes or userAtDebate.confByNo
    return userAtDebateConfirm(userId, debateId, loggedId);
  }
})

Meteor.methods({
  'userAtDebate.goodPoint'(debateId, yesNo, loggedId) {
    // TODO: implement and test
    // Update to true userAtDebate.goodPointsYes if yesNo=true or userAtDebate.goodPointsNo if nesNo=false
    return 'being developed';
  }
})

Meteor.methods({
  'userAtDebate.remove'(debateId, loggedId) {
    // TODO: implement and test
    // By the iser, later maybe before debate.start
    return userAtDebateRemove(debateId, loggedId);
  }
})

