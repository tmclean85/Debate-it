import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Meteor } from 'meteor/meteor';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = ({ userDebateId, currentDebatorId }) => (
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
        {(currentDebatorId) ?
          <Link to={`/debatorscreen`}>
            <RaisedButton
              label="Current Debate"
              secondary
              className="headerbar-btns"
            />
          </Link>
          : (userDebateId) ?
            <Link to={`/debate/${userDebateId.debate_id}/user/${Meteor.userId()}/interface`}>
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
          onTouchTap={() => Meteor.logout()}
        />
      </div>
    </div>
  </AppBar>
);


export default Header;