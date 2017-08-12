import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Meteor } from 'meteor/meteor';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
//import logo from '../../../../public/images/Logo31.png';

import './styles.css';

{/* <Link to='/login'>
          <RaisedButton label="Log In" secondary={true} className="headerbar-btns"
           />
        </Link> */}

const Header = () => (
  <AppBar
    showMenuIconButton={false}
    title={
      <div className="title-wrapper">
        <Link to={"/"}>
          <img className="headerbar-logo" src={"/images/debate-logo.svg"} alt={"\'bate it logo"} />
        </Link>
      </div>
    }
  >
    <div>
      <div className="headerbuttonwrapper">
        <Link to={`/profile/${Meteor.userId()}`}>
          <RaisedButton label="My Profile" className="headerbar-btns"
          />
        </Link>
        
        <RaisedButton
          label="Log Out"
          secondary
          className="headerbar-btns"
          onTouchTap={() => Meteor.logout()}
        />
      </div>
    </div>
  </AppBar>
);


export default Header;