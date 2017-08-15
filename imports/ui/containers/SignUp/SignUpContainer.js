import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getValue } from 'neoform-plain-object-helpers';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { Organizations,
         Users,
         Debates,
         UserAtDebate
} from '../../../api/publications';
import { addUser } from '../../../redux/modules/register';
import SignUp from './SignUp';

class SignUpContainer extends Component {

  onChangeHandler(name, value) {
    this.props.dispatch(addUser(name, value));
  }

  onSubmit() {
    event.preventDefault();
    const email = this.props.data.email;
    const password = this.props.data.password;
    const name = this.props.data.name;
    const bio = this.props.data.bio;
    Meteor.call('user.insert', {
      email,
      password,
      name,
      bio
    });
    const theProps = this.props;
    Meteor.loginWithPassword(
      email,
      password,
      function() {
        theProps.history.push('/')
    }
    );
  }

  onInvalid() {
    console.log('Invalid');
  }

  render() {
    return (
      <SignUp
        data={this.props.data}
        onInvalid={this.onInvalid.bind(this)}
        getValue={getValue}
        onChange={this.onChangeHandler.bind(this)}
        onSubmit={this.onSubmit.bind(this)}      
      />
    );
  }
};

function mapStateFromProps(state) {
  return {
    data: state.register.form
  };
}

const signUpContainer = createContainer(() => {
  Meteor.subscribe('users');
  
  return {
    users: Meteor.users.find().fetch(),
  };
}, SignUpContainer);

export default withRouter(connect(mapStateFromProps)(signUpContainer));