import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
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
    this.setState({ edit: false });
  }

  render() {
    const thisUser = this.props.userLogged[0];
    if (!thisUser) return <Loader />;
    return (
        <Profile 
          userLogged={ thisUser }
          edit={ this.state.edit }
          handleEdit={ ()=> this.handleEdit() }
          handleSubmit={ ()=> this.handleSubmit() }
        />
    )
  }
}

export default createContainer((props) => {

  return {
    userLogged: Meteor.users.find({ _id: Meteor.userId() }).fetch()
  };
}, ProfileContainer);