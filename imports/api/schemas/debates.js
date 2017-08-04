export const Debates = new Mongo.Collection('debates');

// Debates.schema = new DebatesSchema({
//   question: {type: String, optional: false},
//   yesUser_id: {type: String, regEx: SimpleSchema.RegEx.Id, optional: false},
//   yesBecause: {type: String, optional: true},
//   noUser_id: {type: String, regEx: SimpleSchema.RegEx.Id, optional: false},
//   noBecause: {type: String, optional: true},
//   organization: { 
//     name: {type: String, optional: false},
//     address: {type: String, optional: false}
//   },
//   location: {type: String, optional: true},
//   start: {type: String, optional: true},
//   end: {type: String, optional: true}
// });
