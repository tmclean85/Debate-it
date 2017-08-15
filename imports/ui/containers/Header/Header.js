import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Meteor } from 'meteor/meteor';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import './styles.css';



const Header = ({ attending, debator, onLogout }) => (
  <AppBar
    showMenuIconButton={false}
    title={
      <div className="title-wrapper">
        <Link to={"/"}>
          <img className="headerbar-logo" src={"/images/debate-logo.svg"} alt={"'bate it logo"} />
        </Link>
      </div>
    }
  >
    <div>
      <div className="headerbuttonwrapper">
        {(debator.length > 0) ?
          <Link to={`/debate/${debator[0]._id}/user/${Meteor.userId()}/debatorscreen`}>
            <RaisedButton
              label="Current Debate"
              secondary
              className="headerbar-btns"
            />
          </Link>
          : (attending.length > 0) ?
            <Link to={`/debate/${attending[0].debate_id}/user/${Meteor.userId()}/interface`}>
            <RaisedButton
              label="Attended Debate"
              secondary
              className="headerbar-btns"
            />
          </Link>
          : null}
        <Link to={`/profile/${Meteor.userId()}`}>
          <RaisedButton label="My Profile" className="headerbar-btns"
          />
        </Link>

        <RaisedButton
          label="Log Out"
          secondary
          className="headerbar-btns"
          onTouchTap={() => onLogout()}
        />
      </div>
    </div>
  </AppBar>
);


export default Header;