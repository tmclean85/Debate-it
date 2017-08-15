import { Meteor } from 'meteor/meteor';
import { userUpdateSchema } from '../schemas/users';

import { Debates } from '../schemas/debates';
import { UserAtDebate } from '../schemas/user-at-debate';


export function userGetById(id) {
  const user = Meteor.users.find({ _id: id }).fetch();
  return user;
}

export function userGetIdByNum(i) {

  const id = Meteor.users.find({}).fetch()[i]._id;
  return id;
}

export function userInsert(item) {
  Accounts.createUser({
    email: item.email,
    password: item.password,
    profile: {
      name: item.name,
      bio: item.bio,
      wins: 0,
      losses: 0
    }
  });
}

export function userUpdate(name, bio, id)  {
  try {
    const user = {
      name,
      bio
    };

    console.log('will update');
    console.log(user);
    const isValid = userUpdateSchema.validate(user);
    console.log(isValid);

    Meteor.startup(function() {
      Tracker.autorun(function() {
        var context = userUpdateSchema.namedContext('myContext');
        if (!context.isValid()) {
          throw new Meteor.Error('schema', context.invalidKeys())
        }
      });
    });

    Meteor.users.update(id, {$set: { 'profile.name': name, 'profile.bio': bio}});
  } catch (e) {
    console.log('error at userUpdate', e);
    throw new Meteor.Error('error at userUpdate', e);
  }
} 

export function userRecalcScore() {
  const debug = false;
  if (debug) console.log('recalculating scores');

  const id = Meteor.userId();
  let wins = 0;
  let losses = 0;

  // Votes when Yes
  let debates = Debates.find({ yesUser_id: id }).fetch();
  debates.forEach(item => {
    if (debug) console.log('debate ' + item._id + ' with ' + id + ' as yes')
    let winnerYes = 0;
    const voteList = UserAtDebate.find({ debate_id: item._id }).fetch();
    voteList.forEach(it=>{
      if (debug) console.log('user ' + it._id + ' voted ' + it.vote);
      if (it.vote === true) winnerYes += 1;
      else if (it.vote === false) winnerYes -= 1;
      if (debug) console.log('winnerYes become '+winnerYes);
    })
    if (winnerYes > 0) {
      if (debug) console.log('yes won');
      wins += 1;
    }
    if (winnerYes < 0) {
      if (debug) console.log('yes lost');
      losses += 1;
    }
  });

  // Votes when Yes
  debates = Debates.find({noUser_id: id}).fetch();
  debates.forEach(item => {
    if (debug) console.log('debate ' + item._id + ' with ' + id + ' as yes')
    let winnerYes = 0;
    const voteList = UserAtDebate.find({ debate_id: item._id }).fetch();
    voteList.forEach(it=>{
      if (debug) console.log('user ' + it._id + ' voted ' + it.vote)
      if (it.vote === true) winnerYes+=1;
      else if (it.vote === false) winnerYes-=1;
      if (debug) console.log('winnersNo has become ' + winnerYes);
    });
    if (winnerYes > 0) {
      if (debug) console.log('yes won');
      wins += 1;
    }
    if (winnerYes < 0) {
      if (debug) console.log('yes lost');
      losses += 1;
    }
  });
  if (debug) console.log(wins, losses);

  Meteor.users.update( { _id: id }, { $set: { 'profile.wins': wins, 'profile.losses': losses  }} )
  console.log(Meteor.users.find({ _id: id }).fetch());
}

// Tests

export function userAddTest() {

  const count = Meteor.users.find({}).count() + 1;

  Accounts.createUser({
    email : 'login'+count+'@example.com',
    password : '1q2w3e',
    profile: {
      name: 'user'+count,
      bio: 'hjhjhjlh hjklhjklhj hjklhjklh hjlhjhjklhj',
      wins: 0,
      losses: 0
    }
  });
}

export function usersReset () {

  Meteor.users.remove({});

  const array = getResetArray();
  array.forEach(item => {
    Accounts.createUser({
      email : item.email,
      password : '1q2w3e',
      profile: {
        name: item.name,
        bio: item.bio
      }
    });
  });
}

function getResetArray() {
  
  return [
    {
      _id: '1',
      name: 'James Smith',
      email: 'james@test.com',
      bio: 'I am becoming an app developer and will make things in the internet',
      wins: 0,
      losses: 0
    },
    {
      _id: '2',
      name: 'John Johnson',
      email: 'john@example.com',
      bio: 'Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc.',
      wins: 0,
      losses: 0
    },
    {
      _id: '3',
      name: 'Robert Williams',
      email: 'robert@example.com',
      bio: 'I am a doctor and like fixing people up',
      wins: 0,
      losses: 0
    },
    {
      _id: '4',
      name: 'Michael Jones',
      email: 'michael@example.com',
      bio: 'In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit',
      wins: 0,
      losses: 0
    },
    {
      _id: '5',
      name: 'William Brown',
      email: 'william@example.com',
      bio: 'Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue.',
      wins: 0,
      losses: 0
    },
    {
      _id: '6',
      name: 'Richard Miller',
      email: 'richard@example.com',
      bio: 'Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum.',
      wins: 0,
      losses: 0
    },
    {
      _id: '7',
      name: 'Charles Wilson',
      email: 'charles@example.com',
      bio: 'Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat.',
      wins: 0,
      losses: 0
    },
    {
      _id: '8',
      name: 'Joseph Moore',
      email: 'joseph@example.com',
      bio: 'Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.',
      wins: 0,
      losses: 0
    },
    {
      _id: '9',
      name: 'Thomas Taylor',
      email: '@example.com',
      bio: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non',
      wins: 0,
      losses: 0
    },
    {
      _id: '10',
      name: 'Christopher Anderson',
      email: 'christopher@example.com',
      bio: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus',
      wins: 0,
      losses: 0
    },
    {
      _id: '11',
      name: 'Paul Jackson',
      email: 'paul@example.com',
      bio: 'Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia.',
      wins: 0,
      losses: 0
    },
    {
      _id: '12',
      name: 'Mark White',
      email: 'mark@example.com',
      bio: 'I am a marketing profesisonal and like to convnce people to by my things',
      wins: 0,
      losses: 0
    },
    {
      _id: '13',
      name: 'Donald Harris',
      email: 'donald@example.com',
      bio: 'I am a finance profesiosnal and like to handle other people money',
      wins: 0,
      losses: 0
    },
    {
      _id: '14',
      name: 'George Martin',
      email: 'george@example.com',
      bio: 'I am a designer and like to make nice things',
      wins: 0,
      losses: 0
    },
    {
      _id: '15',
      name: 'Kenneth Thompson',
      email: 'kenneth@example.com',
      bio: 'Im am a psicologyst and like to understand why people do what they do',
      wins: 0,
      losses: 0
    }
  ];
}
