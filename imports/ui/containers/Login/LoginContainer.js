import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import Login from './Login';

class LoginContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: props.email,
      password: props.password
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(name, value) {
    this.setState((prevState) => setValue(prevState, name, value));
  }

  onSubmit() {
    console.log(`Submitting ${this.state.data}`);
    Meteor.loginWithPassword(
      state.login.email,
      state.login.password
    )
  }

  onInvalid() {
    console.log('Invalid');
  }

  render() {
    return (
      <Login 
        email={state.login.email}
        password={state.login.password}
      />
    );
  }
}

function mapStateFromProps(state) {
  return {
    email: state.login.email,
    password: state.login.password
  }
}


const loginContainer = createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');
  
  
  return {
    debates: Debates.find().fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, LoginContainer);

export default connect(mapStateFromProps)(loginContainer);