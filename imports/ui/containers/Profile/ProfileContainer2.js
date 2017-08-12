import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Organizations,
         Users,
         Debates,
         UserAtDebate
} from '../../../api/publications';
import Profile from './Profile2';
import Loader from '../../components/Loader';

class ProfileContainer extends Component {

  constructor(props) {
    super(props);
    Meteor.call('user.recalcscore', props.match.params.id)
  }

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

  return {
    userLogged: Meteor.users.find({ _id: Meteor.userId() }).fetch()
  };
}, ProfileContainer);