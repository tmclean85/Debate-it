
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import Moment from 'moment';
import { setValue, getValue } from 'neoform-plain-object-helpers';
import { captureFormInput, setStartTime, setEndTime } from '../../../redux/modules/create';
import DebateCreate from './DebateCreate';
import { Organizations, Users, Debates } from '../../../api/publications';

import './styles.css';

class DebateCreateContainer extends Component {

  componentDidMount() {
    this.props.dispatch(setStartTime(Moment().toDate()));
  }

  convertDurationToEndTime(duration) {
    for (let i = 10; i <= 90; i += 10) {
      if (duration === `${i} Minutes`) {
        const end = Moment(this.props.data.start);
        end.add(i, 'm');
        this.props.dispatch(setEndTime(end.toDate()));
      }
    }
  }

  onChangeHandler(name, value) {
    this.props.dispatch(captureFormInput(name, value));
  }

  onSubmit() {
    //e.preventDefault();
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
  }

  onInvalid() {
    console.log('Invalid');
  }

  render() {
    return (
      <DebateCreate
        userData={this.props.users}
        data={this.props.data}
        getValue={getValue}
        onChange={this.onChangeHandler.bind(this)}
        onInvalid={this.onInvalid.bind(this)}
        onSubmit={this.onSubmit.bind(this)}
        convertDuration={this.convertDurationToEndTime.bind(this)}
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
    users: Users.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, DebateCreateContainer);

export default connect(mapStateFromProps)(debateCreateContainer);
