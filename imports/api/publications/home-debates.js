import { Mongo } from 'meteor/mongo';

import { Debates as HomeDebates } from '../schemas/debates';

export { HomeDebates };

if (Meteor.isServer) {

  Meteor.publish('homeDebates', function homeDebatesPublication() {
    
    return HomeDebates.find({}, {
    fields: {
      question: 1,
      location: 1,
      start: 1,
      end: 1
      }
    });
  })

}
