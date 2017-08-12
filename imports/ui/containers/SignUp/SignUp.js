import React from 'react';
import { Form } from 'neoform';
import TextInput from './FormComponents/TextInput';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

const SignUp = ({ email }) => (

  <div className="sign-up-form">
    <Card className="sign-up-card">
      <form name="register-user">
        <CardHeader
          title="REGISTER"
          subtitle="Sign up and create a profile!"
        />
        <div className="sign-up-main">
          <TextInput
            value={email}
            onChange={this._handleTextFieldChange}
            floatingLabelText="Name"
            floatingLabelFixed={true}
          /><br />
          <TextInput
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
          <TextInput
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