import React from 'react';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

const Login = ({ login }) => (
  <div className="login-page">
    <Card className="login-card">
      <form onSubmit={login} autoComplete="off">
        <CardHeader
          title="LOG IN"
          subtitle="Please provide your e-mail and password" 
        />
        <div className="login-main">
          <TextField
            label="Email"
            floatingLabelText="Email"
            floatingLabelFixed={true}
          /><br />
          <TextField
            label="Password"
            floatingLabelText="Password"
            floatingLabelFixed={true}
          /><br />
          <RaisedButton
            primary 
            type="submit"
            onTouchTap={() => Meteor.loginWithPassword({Email}, {Password})}           
            buttonStyle={{
              height: '2.75rem',
              width: '8rem'        
            }} 
            label="LogIn"
          />           
        </div>
      </form>    
      <CardHeader
        title="Not already a member?"
        subtitle="Sign up now!"
      />    
      <Link to="/signup">
        <RaisedButton
          buttonStyle={{
            height: '2.75rem',
            width: '8rem'        
          }}
          label="Sign Up"
        />           
      </Link>          
    </Card>
  </div>  
);


export default Login;