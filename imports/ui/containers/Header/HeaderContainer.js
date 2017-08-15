import { createContainer } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
    Debates,
    UserAtDebate
} from '../../../api/publications';
import Header from './Header';
import Loader from '../../components/Loader';
import { logInUser } from '../../../redux/modules/login';

class HeaderContainer extends Component {

  onLogout() {
    Meteor.logout();
  }

    render() {
        const { debates, users } = this.props;
        let attending = [];
        let debator = [];
        
        if (debates && users) {
            attending = this.props.userAtDebate;
            debator = debates.filter(debate => debate.yesUser_id === Meteor.userId() || debate.noUser_id === Meteor.userId());
        }

        if (!debates || !users) return <Loader />;
        return (
            <Header
                attending={attending}
                debator={debator}
                onLogout={this.onLogout.bind(this)}
            />
        );
    }
}

function mapStateFromProps(state) {
  return {
    data: state.login.form
  }  
}

const headerContainer = createContainer(() => {
    Meteor.subscribe('debates');
    Meteor.subscribe('userAtDebate');
    Meteor.subscribe('users');

    return {
        debates: Debates.find().fetch(),
        users: Meteor.users.find().fetch(),
        userAtDebate: UserAtDebate.find({ user_id: Meteor.userId() }).fetch()
    };
}, HeaderContainer);

export default withRouter(connect(mapStateFromProps)(headerContainer));
