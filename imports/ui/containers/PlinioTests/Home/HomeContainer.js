import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { HomeDebates } from '../../../../api/publications/home-debates';

import Home from './Home';

class HomeContainer extends Component {

  render() {

    return (
      <Home debateData={this.props.homeDebates}/>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('homeDebates');
  return {
    homeDebates: HomeDebates.find({}).fetch()
  };
}, HomeContainer);