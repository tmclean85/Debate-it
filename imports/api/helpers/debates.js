import { Meteor } from 'meteor/meteor';
import { Debates } from '../schemas/debates';
import { Organizations } from '../schemas/organizations';

export function debateInsert(item) {

  try {

    console.log('will insert debate help', item);

    /*
    Validation
      item.question;
      item.yesUser_id;
      item.yesBecause;
      item.noUser_id;
      item.noBecause;
      item.organization.name;
      item.location;
      item.start;
      item.end;
    */

    const org = Organizations.find({}).fetch()[0];
    console.log(org);

    return Debates.insert({
      question: item.question, 
      yesUser_id: item.yesUser_id, 
      yesBecause: item.yesBecause,
      noUser_id: item.noUser_id,
      noBecause: item.noBecause,
      organization: { 
        name: org.name,
        address: org.address
      }, 
      location: item.location,
      start: item.start, 
      end: item.end
    });

  } catch(e) {
    console.log('error at help', e);
      throw new Meteor.Error(e);
  }
}


