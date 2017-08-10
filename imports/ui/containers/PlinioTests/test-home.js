import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Debates } from '../../../api/publications';

class TestHome extends Component {

  render() {

    return (
      <div>
        <h2>Test home</h2>

      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('users.list');

  return {
    users: Meteor.users.find({}).fetch()
  };
}, TestHome);