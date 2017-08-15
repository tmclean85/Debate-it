import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'neoform';import { withRouter } from 'react-router-dom';
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
            multiLine={true}
            rows={3}
            rowsMax={4}
            name="form.name"
            floatingLabelText="Name"            
          /><br />
          <TextInput
            multiLine={true}
            rows={3}
            rowsMax={4}
            name="form.email"
            floatingLabelText="E-mail"            
          /><br />
          <TextInput
            type="password"
            multiLine={true}
            rows={3}
            rowsMax={4}
            name="form.password"
            floatingLabelText="Password"            
          /><br />
        </div>
        <div className="sign-up-meta">
          <TextInput
            multiLine={true}
            rows={3}
            rowsMax={4}
            name="form.bio"
            floatingLabelText="Biography"            
          /><br />
        </div>
        <RaisedButton
          buttonStyle={{
            height: '2rem',
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