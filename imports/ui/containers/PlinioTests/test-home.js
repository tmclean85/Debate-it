import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Debates } from '../../../api/publications';

class TestHome extends Component {

  render() {
    return (
      <Home debateData={this.props.debates}/>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('debates.list');

  return {
    users: Meteor.debates.find({}).fetch()
  };
}, TestHome);