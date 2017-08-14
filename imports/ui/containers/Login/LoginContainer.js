import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setValue, getValue } from 'neoform-plain-object-helpers';
import { Meteor } from 'meteor/meteor';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import Login from './Login';

class LoginContainer extends Component {

  onChangeHandler(name, value) {
    this.props.dispatch(logInUser(name, value))
  }

  onSubmit() {
    const { data } = this.props;
    const email = data.email;
    const password = data.email;

    Meteor.loginWithPassword(
      email,
      password
    )
  }

  onInvalid() {
    console.log('Invalid');
  }

  render() {
    return (
      <Login 
        data={this.props.data}
        getValue={getValue}
        onChange={this.onChangeHandler.bind(this)}
        onSubmit={this.onSubmit.bind(this)}
      />
    );
  }
}

function mapStateFromProps(state) {
  return {
    data: state.login.form
  }
}


const loginContainer = createContainer(() => {

  Meteor.subscribe('users');
 
  return {
    users: Meteor.users.find().fetch(),
  };
}, LoginContainer);

export default connect(mapStateFromProps)(loginContainer);