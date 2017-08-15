
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import Moment from 'moment';
import { getValue } from 'neoform-plain-object-helpers';
import { withRouter } from 'react-router-dom';

import { captureFormInput, setStartTime, setDuration, captureYesDebator, captureNoDebator } from '../../../redux/modules/create';
import DebateCreate from './DebateCreate';
import { Organizations, Debates } from '../../../api/publications';
import './styles.css';

class DebateCreateContainer extends Component {

    componentDidMount() {
        this.props.dispatch(setStartTime(Moment().toDate()));
    }

    onChangeHandler(name, value) {
        this.props.dispatch(captureFormInput(name, value));
    }

    onSubmit() {
        const { data } = this.props;
        const question = data.question;
        const yesUser_id = data.yesUser_id;
        const yesBecause = data.yesBecause;
        const noUser_id = data.noUser_id;
        const noBecause = data.noBecause;
        const location = data.location;
        const start = data.start;
        const end = data.end;

        Meteor.call('debate.insert', {
            question,
            yesUser_id,
            yesBecause,
            noUser_id,
            noBecause,
            location,
            start,
            end
        }
        );

        this.props.history.push('/');
    }

    setDuration(duration) {
        this.props.dispatch(setDuration(duration));
    }

    captureYesDebator(name) {
        this.props.dispatch(captureYesDebator(name));
    }

    captureNoDebator(name) {
        this.props.dispatch(captureNoDebator(name));
    }

    render() {
        return (
            <DebateCreate
                userData={this.props.users}
                data={this.props.data}
                getValue={getValue}
                onChange={this.onChangeHandler.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
                captureYesDebator={this.captureYesDebator.bind(this)}
                captureNoDebator={this.captureNoDebator.bind(this)}
                setDuration={this.setDuration.bind(this)}
            />
        );
    }
}

function mapStateFromProps(state) {
    return {
        data: state.create.form
    };
}

const debateCreateContainer = createContainer(() => {

    Meteor.subscribe('organizations');
    Meteor.subscribe('users');
    Meteor.subscribe('debates');

    return {
        debates: Debates.find().fetch(),
        users: Meteor.users.find().fetch(),
        organizations: Organizations.find().fetch()
    };
}, DebateCreateContainer);

export default withRouter(connect(mapStateFromProps)(debateCreateContainer));
