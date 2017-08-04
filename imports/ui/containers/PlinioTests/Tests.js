import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import RaisedButton from 'material-ui/RaisedButton';

import { Organizations,
         Users,
         Debates,
         UserAtDebate
} from '../../../api/publications';

import './styles.css';

class Tests extends Component {

  output = '';

  handleReset = () => {
    Meteor.call('all.reset', (error, result) => {
      if (error) {
        console.log('error', error);
        return;
      }
      console.log('reset done');
    });
  }

  handleInsertOne = () => {
    Meteor.call('all.insertOne', (error, result) => {
      if (error) {
        console.log('error', error);
        return;
      }
      console.log('insert done');
    });
  }
  render() {
    return (
      <div className="tests">
        <h2>Tests</h2>

        <RaisedButton label="Reset" primary onClick={() => this.handleReset()} />
        <br /><br />
        <RaisedButton label="Add one" primary onClick={() => this.handleInsertOne()} />
        
        <div className="output">{ this.output }</div>
        
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');
  
  return {
    debates: Debates.find().fetch(),
    users: Users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, Tests);