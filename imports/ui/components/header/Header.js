import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';


import './styles.css';
// import logo from '../../../images/debate-logo.png';

const Header = () => (
  <div>
    <AppBar
          showMenuIconButton={false}
          title="BATE IT"
    >
    <Link to='/profile'>
      <RaisedButton label="My Profile" primary={true} buttonStyle={{
        height: '3.75rem',
        width: '8rem'
      }} />
    </Link>  
      <RaisedButton label="Log In" secondary={true} buttonStyle={{
        height: '3.75rem',
        width: '8rem'        
      }} 
      />      
    </AppBar >
  </div>
);


export default Header;