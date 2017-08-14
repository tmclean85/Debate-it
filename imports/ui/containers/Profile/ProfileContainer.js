import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getValue } from 'neoform-plain-object-helpers';
import { Meteor } from 'meteor/meteor';

import Profile from './Profile';
import Loader from '../../components/Loader';
import { updateUser } from '../../../redux/modules/updateProfile';


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

  onChangeHandler(name, value) {
    this.props.dispatch(updateUser(name, value))
  }

  onSubmit = () => {

    // the next instruction is only for test before we get p from form
    const user = {
      name: this.props.data.name,
      bio: this.props.data.bio
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

  onInvalid() {
    console.log('Invalid');
  }

  render() {
    const thisUser = this.props.userLogged[0];
    console.log(thisUser)
    if (!Meteor.userId()) {
      return <Redirect to="/login" />
    } else if (!thisUser) {
      return <Loader />;
    } else {
      return (
        <Profile
          data={this.props.data}
          userLogged={ thisUser }
          edit={ this.state.edit }
          handleEdit={ () => this.handleEdit() }
          handleSubmit={ () => this.handleSubmit() }
          onInvalid={this.onInvalid.bind(this)}
          getValue={getValue}
          onChange={this.onChangeHandler.bind(this)}
          onSubmit={this.onSubmit.bind(this)}   
        />
      )
    }
  }
}

function mapStateFromProps(state) {
  return {
    data: state.updateProfile.form
  };
}

const profileContainer = createContainer((props) => {

  return {
    userLogged: Meteor.users.find({ _id: Meteor.userId() }).fetch() || {}
  };
}, ProfileContainer);

export default connect(mapStateFromProps)(profileContainer);