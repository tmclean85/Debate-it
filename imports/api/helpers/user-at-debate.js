import { UserAtDebate }  from '../schemas/user-at-debate';
import { Debates } from '../schemas/debates';

import { userGetById, userGetIdByNum } from './user';
import { debateGetById, debateGetIdByNum } from './debates';

export function userAtDebateInsert(userId, debateId) {

  try {

    const debate = Debates.find({_id: debateId}).fetch()[0];
    if (!debate) return 'Debate not found';
    if (debate.yesUser_id === userId || debate.noUser_id === userId) return 'Already a debator';
    const uad = UserAtDebate.find({user_id: userId, debate_id: debateId}).fetch()[0];
    if (uad) return 'Already in this debate';

    UserAtDebate.insert({
      user_id: userId,
      debate_id: debateId,
      confByYes: false, 
      confByNo: false,
      attended: false,
      vote: null, 
      because: '', 
      goodPointsYes: 0,
      goodPointsNo: 0
    });

    return true;

  } catch(e) {
    console.log(e);
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

export function userAtDebateVote(debateId, vote, because, loggedId) {

  try {

    const debug = false;

    if (vote !== true && vote !== false && vote !== null) throw 'vote invalid';
    if (!userGetById(loggedId)) throw 'vote invalid';

    const old = UserAtDebate.find({user_id: loggedId, debate_id: debateId}).fetch()[0];
    if (!old) throw 'user/debate invalid';
    if (debug) console.log('old', old);

    let obj = old;
    obj.vote = vote;
    obj.because = because;
    if (debug) console.log('new', obj);

    UserAtDebate.update({user_id: loggedId, debate_id: debateId}, obj);
    
  } catch(e) {
    console.log(e)
    throw new Meteor.Error('userAtDebateVote', e);
  }
}

export function userAtDebateAttend(userId, debateId, loggedId) {
  try {
    const old = UserAtDebate.find({user_id: userId, debate_id: debateId}).fetch()[0];
    const obj = { ...old, attended: !old.attended};
    UserAtDebate.update({user_id: userId, debate_id: debateId}, obj);

    return !old.attended;  
  } catch (e) {
    throw e;
  }   
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