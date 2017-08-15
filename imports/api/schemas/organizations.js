import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Organizations = new Mongo.Collection('organizations');

// For documentation purpose since in this version there is not insert or update
export const organizationsSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 140,
    optional: false
  },
  address: {
    type: String,
    label: 'Address',
    max: 280,
    optional: false
  },
});
