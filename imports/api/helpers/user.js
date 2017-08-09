import { Meteor } from 'meteor/meteor';

export function userTestInsert() {

  const count = Meteor.users.find({}).count() + 1;
  console.log(count);
  Accounts.createUser({
    email : 'login'+count+'@example.com',
    password : '1q2w3e',
    profile: {
      name: 'user'+count,
      bio: 'hjhjhjlh hjklhjklhj hjklhjklh hjlhjhjklhj'
    }
  });
}

export function usersReset () {

  const array = getResetArray();

  Meteor.users.remove({});
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
      name: 'James Smith',
      email: 'james@test.com',
      bio: 'I am becoming an app developer and will make things in the internet',
    },
    {
      name: 'John Johnson',
      email: 'john@example.com',
      bio: 'Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc.',
    },
    {
      name: 'Robert Williams',
      email: 'robert@example.com',
      bio: 'I am a doctor and like fixing people up',
    },
    {
      name: 'Michael Jones',
      email: 'michael@example.com',
      bio: 'In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit',
    },
    {
      name: 'William Brown',
      email: 'william@example.com',
      bio: 'Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue.',
    },
    {
      name: 'Richard Miller',
      email: 'richard@example.com',
      bio: 'Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum.',
    },
    {
      name: 'Charles Wilson',
      email: 'charles@example.com',
      bio: 'Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat.',
    },
    {
      name: 'Joseph Moore',
      email: 'joseph@example.com',
      bio: 'Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.',
    },
    {
      name: 'Thomas Taylor',
      email: '@example.com',
      bio: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non',
    },
    {
      _id: '10',
      name: 'Christopher Anderson',
      email: 'christopher@example.com',
      bio: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus',
    },
    {
      name: 'Paul Jackson',
      email: 'paul@example.com',
      bio: 'Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia.',
    },
    {
      name: 'Mark White',
      email: 'mark@example.com',
      bio: 'I am a marketing profesisonal and like to convnce people to by my things',
    },
    {
      name: 'Donald Harris',
      email: 'donald@example.com',
      bio: 'I am a finance profesiosnal and like to handle other people money',
    },
    {
      name: 'George Martin',
      email: 'george@example.com',
      bio: 'I am a designer and like to make nice things',
    },
    {
      name: 'Kenneth Thompson',
      email: 'kenneth@example.com',
      bio: 'Im am a psicologyst and like to understand why people do what they do',
    }
  ];
}