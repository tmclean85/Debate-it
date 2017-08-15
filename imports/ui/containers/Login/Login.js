import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'neoform';
import TextInput from '../DebateCreate/FormComponents/TextInput';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';

const Login = ({data, onSubmit}) => (
  <div className="login-page">
    <Card className="login-card">
      <form>
        <CardHeader
          title="LOG IN"
          subtitle="Please provide your e-mail and password" 
        />
        <div className="login-main">
          <TextInput
            type="input"
            name="form.email"
            floatingLabelFixed={true}
            multiLine={true}
            rows={3}
            rowsMax={4}
            floatingLabelText="E-mail"
            defaultValue=""
          /><br />
          <TextInput
            type="password"
            floatingLabelFixed={true}
            multiLine={true}
            rows={3}
            rowsMax={4}
            name="form.password"
            floatingLabelText="Password"    
            autoComplete="off"    
            defaultValue=""                
          /><br />
          <Link to="/">
          <RaisedButton
              primary 
              onTouchTap={() => onSubmit()}
              buttonStyle={{
                height: '2rem',
                width: '8rem'        
              }}
              label="LogIn"
          />
          </Link>     
        </div>
      </form>    
      <CardHeader
        title="Not already a member?"
        subtitle="Sign up now!"
      />
      <Link to="/signup">
        <RaisedButton
          buttonStyle={{
            height: '2rem',
            width: '8rem'
          }}
          label="Sign Up"
        />
      </Link>
    </Card>
  </div>
);


export default (Form(Login))
