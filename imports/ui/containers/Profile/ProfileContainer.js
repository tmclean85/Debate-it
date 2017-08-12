import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Organizations,
         Users,
         Debates,
         UserAtDebate
} from '../../../api/publications';
import Profile from './Profile';
import Loader from '../../components/Loader';

class ProfileContainer extends Component {

  render() {
    const thisUser = this.props.userLogged[0];
    if (!thisUser) return <Loader />;
    return (
        <Profile 
          userLogged={ thisUser }
        />
    )
  }
}

export default createContainer((props) => {
  Meteor.subscribe('users');

  return {
    userLogged: Meteor.users.find({ _id: props.match.params.id }).fetch()
  };
}, ProfileContainer);