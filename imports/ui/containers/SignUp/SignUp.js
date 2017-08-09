import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

const SignUp = () => (
  <div className="sign-up-form">
    <Card className="sign-up-card">
      <form name="register-user">
        <CardHeader
          title="REGISTER"
          subtitle="Sign up and create a profile!"
        />
        <div className="sign-up-main">
          <TextField
            floatingLabelText="Name"
            floatingLabelFixed={true}
          /><br />
          <TextField
            floatingLabelText="Email"
            floatingLabelFixed={true}
          /><br />
        </div>
        <div className="sign-up-meta">
          <TextField
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
        />      
      </form>      
    </Card>  
  </div>  
);

export default SignUp;