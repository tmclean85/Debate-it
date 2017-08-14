import { UserAtDebate }  from '../schemas/user-at-debate';

import { userGetById, userGetIdByNum } from './user';
import { debateGetById, debateGetIdByNum } from './debates';

export function userAtDebateInsert(item) {

  try {

    return UserAtDebate.insert({
      user_id: item.user_id,
      debate_id: item.debate_id,
      confByYes: false, 
      confByNo: false,
      attended: false,
      vote: null, 
      because: '', 
      goodPointsYes: 0,
      goodPointsNo: 0
    });

  } catch(e) {
    throw new Meteor.Error(e);
  }
}

export function userAtDebateConfirm(userId, debateId, loggedId) {
  
  try {
    const debate = debateGetById(debateId);
    if (!debate) throw 'debate invalid';

    const old = userAtDebateGetByIds(userId, debateId);

    if (debate.yesUser_id === loggedId) {
      UserAtDebate.update({user_id: loggedId, debate_id: debateId}, { ...old, confByYes: true}); // QUESTION: Can I do this?
    } else if (debate.noUser_id === loggedId) {
      UserAtDebate.update({user_id: loggedId, debate_id: debateId}, { ...old, confByNo: true}); // QUESTION: Can I do this?
    } else {
      throw 'confirmer invalid';
    }
  } catch(e) {
    console.log(e)
    throw new Meteor.Error(e);
  } 
}

export function userAtDebateRemove(debateId, loggedId) {

  try {
    
    UserAtDebate.remove({ _debate_id: debateId, user_id: loggedId });

  } catch(e) {
    console.log(e)
    throw new Meteor.Error(e);
  }
}

export function userAtDebateVote(debateId, vote, loggedId) {

  try {

    const debug = false;

    if (vote !== true && vote !== false && vote !== null) throw 'vote invalid';
    if (!userGetById(loggedId)) throw 'vote invalid';

    const old = UserAtDebate.find({user_id: loggedId, debate_id: debateId}).fetch()[0];
    if (!old) throw 'user/debate invalid';
    if (debug) console.log('old', old);

    let obj = old;
    obj.vote = vote;
    if (debug) console.log('new', obj);

    UserAtDebate.update({user_id: loggedId, debate_id: debateId}, obj);
    
  } catch(e) {
    console.log(e)
    throw new Meteor.Error('userAtDebateVote', e);
  }
}

export function userAtDebateAttend(userId, debateId, loggedUser) {
  console.log(userId+' will arrived at '+debateI+', '+loggedUser)
}

// Helpers

export function userAtDebateGetByIds(userId, debateId) {
  
  try {

    item = UserAtDebate.find({ user_id: userId, debate_id: debateId })
    return item;

  } catch(e) {
    console.log(e)
    throw new Meteor.Error(e);
  } 
}

// Tests

export function userAtDebateReset() {

  try {

    UserAtDebate.remove({});

    const array = getResetArray();
    array.forEach(item => UserAtDebate.insert({
        user_id: userGetIdByNum(item.user_id),
        debate_id: debateGetIdByNum(item.debate_id),
        confByYes: item.confByYes, 
        confByNo: item.confByNo,
        attended: item.attended,
        vote: item.vote, 
        because: item.because, 
        goodPointsYes: item.goodPointsYes,
        goodPointsNo: item.goodPointsNo
    }));

  } catch(e) {
    throw new Meteor.Error(e);
  }
}

export function userAtDebateAddTest() {
    UserAtDebate.insert({
      user_id: userGetIdByNum(3),
      debate_id: debateGetIdByNum(0),
      confByYes: false, 
      confByNo: false,
      attended: false,
      vote: null, 
      because: '', 
      goodPointsYes: 0,
      goodPointsNo: 0
    });
}

function getResetArray() {

  return [
    {
      user_id: 2,
      debate_id: 0,
      confByYes: true, 
      confByNo: true, 
      attended: true,
      vote: false, 
      because: 'Yes because hfjklhj lhgjlkrh jlr', 
      goodPointsYes: 3,
      goodPointsNo: 2
    },
    {
      user_id: 3,
      debate_id: 0,
      confByYes: true, 
      confByNo: true,
      attended: true,
      vote: true, 
      because: 'Yes because jfklh fjkl hfjkl', 
      goodPointsYes: 3,
      goodPointsNo: 2
    },
    {
      user_id: 4,
      debate_id: 0,
      confByYes: false, 
      confByNo: true,
      attended: true,
      vote: false, 
      because: 'jlhfjl hfjl hfjlkhj l', 
      goodPointsYes: 3,
      goodPointsNo: 2
    },
    {
      user_id: 2,
      debate_id: 1,
      confByYes: true, 
      confByNo: true,
      attended: true,
      vote: true,
      because: 'Because fkls hjhjhjl hjk l', 
      goodPointsYes: 3,
      goodPointsNo: 2
    },
    {
      user_id: 3,
      debate_id: 1,
      confByYes: true, 
      confByNo: true,
      attended: true,
      vote: null, 
      because: 'What a mess!', 
      goodPointsYes: 0,
      goodPointsNo: 0
    },
    {
      user_id: 4,
      debate_id: 2,
      confByYes: false, 
      confByNo: true, 
      attended: false,
      vote: undefined, 
      because: '', 
      goodPointsYes: 0,
      goodPointsNo: 0
    }
  ]
}