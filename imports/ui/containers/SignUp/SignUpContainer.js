import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import SignUp from './SignUp';

class SignUpContainer extends Component {

  registerNewUser() {
    const email = this.props.email;
    const password = this.props.password;
    const name = this.props.name;
    const bio = this.props.bio;

    Meteor.call('user.insert', {
      email,
      password,
      name,
      bio
    });
  }

  render() {
    return (
      <SignUp 
        email={this.props.email}/>
    );
  }
};

function mapStateFromProps(state) {
  return {
    name: state.register.name,
    email: state.register.email,
    password: state.register.password,
    bio: state.register.bio
  };
}

const signUpContainer = createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');
  
  
  return {
    userLogged: Meteor.users.find({_id: Meteor.userId()}).fetch()[0],    
    debates: Debates.find().fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, SignUpContainer);

export default connect(mapStateFromProps)(signUpContainer)