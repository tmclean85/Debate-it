import { UserAtDebate }  from '../schemas/user-at-debate';

import { userGetIdByNum } from './user';
import { debateGetIdByNum } from './debates';

export function userAtDebateInsert() {

  try {

    /*
    Validation
      item.user_id;
      item.debate_id;
    */

    return UserAtDebate.insert({
      user_id: userGetIdByNum(item.user_id),
      debate_id: debateGetIdByNum(item.debate_id),
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
      debate_id: 0,
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