import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

const Login = () => (
  <div className="login-page">
    <Card className="login-card">
      <form name="login">
        <CardHeader
          title="LOG IN"
          subtitle="Please provide your name and e-mail" 
        />
        <div className="login-main">
          <TextField
            floatingLabelText="Name"
            floatingLabelFixed={true}
          /><br />
          <TextField
            floatingLabelText="Email"
            floatingLabelFixed={true}
          /><br />
          <RaisedButton
            buttonStyle={{
              height: '2.75rem',
              width: '8rem'        
            }} 
            label="Log In"
          />           
        </div>
      </form>        
    </Card>
  </div>  
);


export default Login;