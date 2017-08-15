import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const UserAtDebate = new Mongo.Collection('userAtDebate');

export const userAtDebateSchema = new SimpleSchema({
  user_id: {
    type: String,
    label: 'User_id',
    max: 70,
    optional: false
  },
  debate_id: {
    type: String,
    label: 'Debare_id',
    max: 70,
    optional: true
  },
  confByYes: {
    type: Boolean,
    label: 'confByYes',
    autoValue: () => false,
    optional: false
  },
  confByNo: {
    type: Boolean,
    label: 'confByNo',
    autoValue: () => false,
    optional: false
  },
  attended: {
    type: Boolean,
    label: 'confByNo',
    autoValue: () => false,
    optional: false
  },
  vote: {
    type: Boolean,
    label: 'confByNo',
    autoValue: () => null,
    optional: true
  },
  because: {
    type: String,
    label: 'because',
    max: 140,
    autoValue: () => '',
    optional: true
  }
});
