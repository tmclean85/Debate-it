console.log('Reinstalling mongodb');

function reinstallDb() {

  /*
  Collections:
   organizations
   users
   debates
   atencdencies
  */


//   /*
//   In this version, only Red and no crud
//   */
//   db.organizations.insert({
//     name: "Red Academy",
//     address: "1490 W Broadway #200, Vancouver, BC V6H 4E8"
//   });


//   db.users.insert({
//     name: 'Charlie',
//     email: 'charlie@test.com',
//     bio: 'I am becoming an app developer and will make stuff in the internet', 
//     goodPoints: 99,
//     wins: 1,
//     losses: 0,
//   })

  db.users.insert({
    name: 'Trevor',
    email: 'trevor@test.com',
    bio: 'I am becoming an app developer and will make things in the internet',
    goodPoints: 98,
    wins: 1,
    losses: 0
  })

  // Plinio is iser 3

//   db.debates.insert({
//     question: 'Will the world end next year', 
//     yesUser_id: '1', 
//     yesBecause: 'The world it so more messed up then Noahs time a the flood should have already came and will/should happen at eny moment, certainly before the end of this year', // form in the creation, if creator, or later, of other
//     noUser_id: '2',
//     noBecause: 'The world was a mess since the down of time and will always be',
//     organization: { 
//       name: 'Red Academy', 
//       address: '1490 W Broadway #200, Vancouver, BC V6H 4E8'
//     }, 
//     location: 'Kitchen in the second floor',
//     start: '2017-09-01 19:00:00', 
//     end: '2017-09-02 20:00:00'
//   })

//   db.userAtDebate.insert({
//     user_id: '3',
//     debate_id: '1',
//     confByYes: true, 
//     confByNo: true, 
//     vote: false, 
//     because: 'was allways messy so will not end', // Created default '' later justified the No 
//     goodPointsYes: 3, // Clicked over the debate
//     goodPointsNo: 2 //  Clicked over the debate
//   })

  console.log('Reinstalled');
}

