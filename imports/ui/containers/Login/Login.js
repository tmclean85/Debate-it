import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'neoform';
import TextInput from '../DebateCreate/FormComponents/TextInput';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { logInUser } from '../../../redux/modules/login';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

const Login = (data, onSubmit) => (
  <div className="login-page">
    <Card className="login-card">
      <form>
        <CardHeader
          title="LOG IN"
          subtitle="Please provide your e-mail and password" 
        />
        <div className="login-main">
          <TextInput
            name="form.email"
          /><br />
          <TextInput
            name="form.password"
          /><br />
          <RaisedButton
            primary 
            onTouchTap={() => onSubmit()}           
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
          type="submit"
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


export default (Form(Login))