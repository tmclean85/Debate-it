import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'neoform';
import TextInput from '../DebateCreate/FormComponents/TextInput';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

const SignUp = ({ data, onSubmit }) => (

  <div className="sign-up-form">
    <Card className="sign-up-card">
      <form name="register-user">
        <CardHeader
          title="REGISTER"
          subtitle="Sign up and create a profile!"
        />
        <div className="sign-up-main">
          <TextInput
            name="form.name"
            floatingLabelText="Name"            
          /><br />
          <TextInput
            name="form.email"
            floatingLabelText="E-mail"            
          /><br />
          <TextInput
            name="form.password"
            floatingLabelText="Password"            
          /><br />
        </div>
        <div className="sign-up-meta">
          <TextInput
            name="form.bio"
            floatingLabelText="Biography"            
          /><br />
        </div>  
        <RaisedButton
          buttonStyle={{
            height: '2.75rem',
            width: '8rem'        
          }}
          label="Sign Up!"
          onTouchTap={() => onSubmit()}
        />      
      </form>  
    </Card>  
  </div>  
);

export default (Form(SignUp));