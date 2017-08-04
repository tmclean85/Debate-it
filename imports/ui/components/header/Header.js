import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';
// TODO: Determine why the below accurate path is rejected
// import logo from '../../../../images/debate-logo.png';

const Header = () => (
  <div>
    <AppBar
          showMenuIconButton={false}
          title={
            <div>
              {/* <img src={logo}/> */}
              <h1>'Bate It!</h1>
            </div>  
          }
    >
      <RaisedButton label="BATE IT" primary={true} />
    </AppBar >
  </div>
);


export default Header;