import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

const SignUp = () => (

  this.state = {
        emailFieldValue: '',
        passwordFieldValue: '',
        nameFieldValue: '',
        bioFieldValue: ''
  },

  // _handleTextFieldChange = (e) => {
  //   this.setState({
  //       emailFieldValue: e.target.value,
  //       passwordFieldValue: e.target.value,
  //       nameFieldValue: e.target.value,
  //       bioFieldValye: e.target.value
  //   });
  // },

  insertUser = () => {
    const email = this.state.emailFieldValue
    const password = this.state.passwordFieldValue
    const name = this.state.nameFieldValue
    const bio = this.state.bioFieldValue
    Meteor.call('user.insert', {
      email,
      password,
      name,
      bio
    })
  },


  <div className="sign-up-form">
    <Card className="sign-up-card">
      <form name="register-user">
        <CardHeader
          title="REGISTER"
          subtitle="Sign up and create a profile!"
        />
        <div className="sign-up-main">
          <TextField
            value={this.state.nameFieldValue} 
            onChange={this._handleTextFieldChange}
            floatingLabelText="Name"
            floatingLabelFixed={true}
          /><br />
          <TextField
            value={this.state.emailFieldValue} 
            onChange={this._handleTextFieldChange}          
            floatingLabelText="Email"
            floatingLabelFixed={true}
          /><br />
          <TextField
            value={this.state.passwordFieldValue} 
            onChange={this._handleTextFieldChange}
            floatingLabelText="Password"
            floatingLabelFixed={true}
          /><br />
        </div>
        <div className="sign-up-meta">
          <TextField
            value={this.state.bioFieldValue}
            onChange={this._handleTextFieldChange}
            floatingLabelText="Biography"
            floatingLabelFixed={true}
          /><br />
        </div>  
        <RaisedButton
          buttonStyle={{
            height: '2.75rem',
            width: '8rem'        
          }}
          label="Sign Up!"
          onTouchTap={insertUser()}
        />      
      </form>  
    </Card>  
  </div>  
);

export default SignUp;