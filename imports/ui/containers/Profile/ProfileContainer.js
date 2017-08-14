import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

import Profile from './Profile';
import Loader from '../../components/Loader';

class ProfileContainer extends Component {

  constructor(props) {
    super(props);
    Meteor.call('user.recalcscore', props.match.params.id);
    this.state = {
      edit: false
    };
  }

  handleEdit = () => {
    this.setState({ edit: true });
  }

  handleSubmit = () => {

    // the next instruction is only for test before we get p from form
    const user = {
      name: 'Newbie',
      bio: 'I am an immaginary test user and have no bio. jghjkghj hjkg hk ghjk ghjk ghjkg hkg hjk ghkg hkghjk ghk'
    }
    // End test

    Meteor.call('user.update', user.name, user.bio, Meteor.userId(), (error, result) => {
      if (error) {
        console.log('error', error);
        return;
      }
      this.setState({ edit: false });
      console.log('Updated');
    });
  }

  render() {
    const thisUser = this.props.userLogged[0];
    if (!Meteor.userId()) {
      return <Redirect to="/login" />
    } else if (!thisUser) {
      return <Loader />;
    } else {
      return (
        <Profile
          userLogged={ thisUser }
          edit={ this.state.edit }
          handleEdit={ () => this.handleEdit() }
          handleSubmit={ () => this.handleSubmit() }
        />
      )
    }
  }
}

export default createContainer((props) => {

  return {
    userLogged: Meteor.users.find({ _id: Meteor.userId() }).fetch() || {}
  };
}, ProfileContainer);