import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getValue } from 'neoform-plain-object-helpers';
import { Meteor } from 'meteor/meteor';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import { logInUser } from '../../../redux/modules/login';
import Login from './Login';

class LoginContainer extends Component {

  onChangeHandler(name, value) {
    this.props.dispatch(logInUser(name, value));
    console.log(name, value);
  }

  onSubmit() {
    Meteor.loginWithPassword(
      state.login.form.email,
      state.login.form.password
    )
  }

  onInvalid() {
    console.log('Invalid');
  }

  render() {
    return (
      <Login 
        data={this.props.data}
        onInvalid={this.onInvalid.bind(this)}        
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
  };
}


const loginContainer = createContainer(() => {

  Meteor.subscribe('users');
 
  return {
    users: Meteor.users.find().fetch(),
  };
}, LoginContainer);

export default connect(mapStateFromProps)(loginContainer);