import SimpleSchema from 'simpl-schema';

export const userProfileSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 140,
    optional: false
  },
  bio: {
    type: String,
    label: 'Bio',
    max: 70,
    optional: true
  },
  wins: {
    type: Number,
    min: 0,
    autoValue: () => 0
  },
  losses: {
    type: Number,
    min: 0,
    autoValue: () => 0
  }
});

export const userSchema = new SimpleSchema({
  email: {
    type: String,
    label: 'User_id',
    max: 70,
    optional: false
  },
  password: {
    type: String,
    label: 'Debate_id',
    max: 70,
    optional: true
  },
  profile: {
    type: userProfileSchema
  }
});

export const userUpdateSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 140,
    optional: false
  },
  bio: {
    type: String,
    label: 'Bio',
    max: 70,
    optional: true
  }
}).newContext();
