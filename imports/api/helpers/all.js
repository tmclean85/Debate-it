import { Meteor } from 'meteor/meteor';

import { organizationsReset } from '../helpers/organizations';
import { debateReset, debateAddTest } from '../helpers/debates';
import { usersReset, userAddTest } from '../helpers/user';
import { userAtDebateReset, userAtDebateAddTest } from '../helpers/user-at-debate';

export function allReset() {

  try {

    organizationsReset();
    usersReset();
    debateReset();
    userAtDebateReset();

  } catch(e) {
    console.log('error', e);
    throw new Meteor.Error(e);
  }
}

export function allInsertOne() {

  try {

    userAddTest();
    debateAddTest();
    userAtDebateAddTest();
    
  } catch(e) {
    throw new Meteor.Error(e);
  }
}


