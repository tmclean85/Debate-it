import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import AccountsUIWrapper from '../AccountsWrapper';

const Layout = ({ children }) => (
  <div className="layout-wrapper">
    <AccountsUIWrapper />
    <div className="layout-header">
      <Header />
    </div>
    <div className="layout-content">
      {children}
    </div>
    <div className="layout-footer">
      <p> &copy; Copyright 2017 'BATE IT!!</p>
    </div>
  </div>
);

// Layout.defaultProps = {
//   children: null
// };

// Layout.propTypes = {
//   children: PropTypes.node
// };

export default Layout;