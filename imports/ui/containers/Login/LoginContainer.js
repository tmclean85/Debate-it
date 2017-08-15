import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
  }

  onSubmit() {
    const loginProps = this.props;
    Meteor.loginWithPassword(
      this.props.data.email,
      this.props.data.password,
      function() {
        if(Meteor.user()) {
        loginProps.history.push('/')
        } else {
          alert("Please enter a valid e-mail and password");
        }
      }
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

export default withRouter(connect(mapStateFromProps)(loginContainer));
