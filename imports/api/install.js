// console.log('Reinstalling mongodb');

// function reinstallDb() {

//   /*
//   Collections:
//    organizations
//    users
//    debates
//    atencdencies
//   */

//   /*
//   In this version, only Red and no crud
//   */
//   db.organizations.insert({ // In this version will be created in the install  // TODO: organization
//     // _id
//     name: "Red Academy",
//     address: "1490 W Broadway #200, Vancouver, BC V6H 4E8"
//   });


//   db.users.insert({
//     // _id
//     name: 'Charlie', // From signin form
//     email: 'charlie@test.com' // From signin, used in the gravatar
//     bio: 'I am becoming an app developer and will make stuff in the internet', // From signin form
//     goodPoints: 99, // Will be replaced by calc
//     wins: 1, // Will be replaced by calc
//     losses: 0, // Will be replaced by calc
//   })

//   db.users.insert({
//     name: 'Trevor',
//     email: 'trevor@test.com',
//     bio: 'I am becoming an app developer and will make things in the internet',
//     goodPoints: 98,
//     wins: 1,
//     losses: 0
//   })

//   // Plinio is iser 3

//   db.debates.insert({
//     question: 'Will the world end next year', // form
//     yesUser_id: '1', // see noUser_id
//     yesBecause: 'The world it so more messed up then Noahs time a the flood should have already came and will/should happen at eny moment, certainly before the end of this year', // form in the creation, if creator, or later, of other
//     noUser_id: '2', // Both valid users, one of them must be the creator
//     noBecause: 'The world was a mess since the down of time and will always be',
//     organization: { // Embedded to retain original info
//       name: 'Red Academy', // Selected in creation and validated against locations
//       address: '1490 W Broadway #200, Vancouver, BC V6H 4E8'} // From default
//     },
//     location: 'Kitchen in the second floor',
//     start: '2017-09-01 19:00:00', // > now()
//     end: '2017-09-02 20:00:00' // will be calculated by bates.form.start and bates.form.duration > start, max dif between start and end: 1h, in minutes
//   })

//   db.userAtDebate.insert({
//     user_id: '3',
//     debate_id: '1',
//     confByYes: true, // default false and later changed by yesUser
//     confByNo: true, // default null and later changed by noUser, these last 2 true the voting page is available
//     vote: false, // Created default null later alreayvoted No (updating with a required because) 
//     because: 'was allways messy so will not end', // Created default '' later justified the No 
//     goodPointsYes: 3, // Clicked over the debate
//     goodPointsNo: 2 //  Clicked over the debate
//   })

//   console.log('Reinstalled');
// }

