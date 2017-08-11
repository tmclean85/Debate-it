import { Debate } from '../schemas/debates';
import { userGetAll } from './user';

export function userAtDebateInsert() {

  try {

    /*
    Validation
      item.user_id;
      item.debate_id;
    */

    const users = userGetAll();

    return userAtDebate.insert({
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