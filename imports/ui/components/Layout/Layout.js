import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import Footer from '../Footer';
import AccountsUIWrapper from '../AccountsWrapper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './styles.css';

const Layout = ({ children }) => (
  <div className="layout-wrapper">
    <AccountsUIWrapper />
    <div className="layout-header">
      <Header />
    </div>
    <div className="layout-content">
      {children}
      <Link to={'/createdebate'}>
        <FloatingActionButton className="create-debate-button" secondary>
            <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
    <div className="app-footer">
      <p className="layout-footer"> &copy; Copyright 2017 'BATE IT!!</p>
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