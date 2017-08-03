
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Organizations, Users, Debates } from '../../../api/publications';

import './styles.css';

class DebateCreateContainer extends Component {
  
}



export default createContainer(() => {
  
  Meteor.subscribe('organizations');
  Meteor.subscribe('users');
  Meteor.subscribe('debates');

  return {
    debates: Debates.find().fetch(),
    users: Users.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, DebateCreateContainer);

