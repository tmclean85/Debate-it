export const Debates = new Mongo.Collection('debates');

export const debatesInit = [
  {
    question: 'Is it morally right to colonize other planets that are developing life', 
    yesUser_id: '1', 
    yesBecause: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. ',
    noUser_id: '2',
    noBecause: 'Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas libero. Etiam dictum tincidunt diam.',
    organization: { 
      name: 'Red Academy', 
      address: '1490 W Broadway #200, Vancouver, BC V6H 4E8'
    }, 
    location: 'Kitchen in the second floor',
    start: new Date(2017, 7, 1, 20, 00), 
    end: new Date(2017, 7, 1, 21, 00)
  },  {
    question: 'Is GMO safe', 
    yesUser_id: '1', 
    yesBecause: 'Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie nisl. Fusce eget urna. ',
    noUser_id: '3',
    noBecause: 'Integer imperdiet lectus quis justo. Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. ',
    organization: { 
      name: 'Red Academy', 
      address: '1490 W Broadway #200, Vancouver, BC V6H 4E8'
    }, 
    location: 'Blenz Coffee',
    start: new Date(2017, 7, 5, 20, 15), 
    end: new Date(2017, 7, 5, 21, 15)
  },
  {
    question: 'Will the Large Hadron Collider destroy earth', 
    yesUser_id: '2', 
    yesBecause: 'Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.',
    noUser_id: '3',
    noBecause: 'Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh',
    organization: { 
      name: 'Red Academy', 
      address: '1490 W Broadway #200, Vancouver, BC V6H 4E8'
    }, 
    location: 'Blenz Coffee',
    start: new Date(2017, 7, 9, 12, 00),
    end: new Date(2017, 7, 9, 13, 00)
  },
  {
    question: 'Should scientists mix human cells with animals', 
    yesUser_id: '1', 
    yesBecause: ' Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium.',
    noUser_id: '3',
    noBecause: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. ',
    organization: { 
      name: 'Red Academy', 
      address: '1490 W Broadway #200, Vancouver, BC V6H 4E8'
    }, 
    location: 'Kitchen in the second floor',
    start: new Date(2017, 7, 14, 20, 00), 
    end: new Date(2017, 7, 14, 21, 00)
  }
];


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

