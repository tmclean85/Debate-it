import { Meteor } from 'meteor/meteor';

import { organizationsReset } from '../helpers/organizations';
import { debatesReset, debateAddTest } from '../helpers/debates';
import { usersReset, userAddTest } from '../helpers/user';

import { UserAtDebate, userAtDebateInit } from '../schemas/user-at-debate';

export function allReset() {

  try {

    organizationsReset();
    usersReset();
    debatesReset();

    UserAtDebate.remove({});
    userAtDebateInit.forEach(item => UserAtDebate.insert(item));

    return 'ok';

  } catch(e) {
    console.log('error', e);
    throw new Meteor.Error(e);
  }
}

export function allInsertOne() {

  try {

    userAddTest();

    debateAddTest();

    UserAtDebate.insert({
      user_id: '3',
      debate_id: '1',
      confByYes: true, 
      confByNo: true, 
      vote: false, 
      because: 'because',
      goodPointsYes: 3,
      goodPointsNo: 2
    });
    return 'ok';

  } catch(e) {
    throw new Meteor.Error(e);
  }
}


