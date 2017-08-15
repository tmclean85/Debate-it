import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import {
    Debates,
    UserAtDebate
} from '../../../api/publications';
import Header from './Header';
import Loader from '../../components/Loader';

class HeaderContainer extends Component {

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
            />
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('debates');
    Meteor.subscribe('userAtDebate');
    Meteor.subscribe('users');

    return {
        debates: Debates.find().fetch(),
        users: Meteor.users.find().fetch(),
        userAtDebate: UserAtDebate.find({ user_id: Meteor.userId() }).fetch()
    };
}, HeaderContainer);