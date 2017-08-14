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


  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Login will come here</p>
      </div>
    );
  }
}

export default LoginContainer;