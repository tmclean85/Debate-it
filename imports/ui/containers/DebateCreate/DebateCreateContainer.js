
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

import DebateCreate from './DebateCreate';
import { Organizations, Users, Debates } from '../../../api/publications';

import './styles.css';

class DebateCreateContainer extends Component {
  render() {
    return (
      <DebateCreate userData={this.props.users}/>
    );
  }
}



const debateCreateContainer = createContainer(() => {
  
  Meteor.subscribe('organizations');
  Meteor.subscribe('users');
  Meteor.subscribe('debates');

  return {
    debates: Debates.find().fetch(),
    users: Users.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, DebateCreateContainer);

export default connect()(debateCreateContainer);
