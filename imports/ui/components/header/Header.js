import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const Header = () => (
  <div>
    <AppBar
          showMenuIconButton={false}
          title="\'BATE IT!"
    >
      <RaisedButton label="BATE IT" primary={true} />
    </AppBar >
  </div>
);

export default Header;