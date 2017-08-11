import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { Organizations,
         Debates,
         UserAtDebate
} from '../../../api/publications';

import './styles.css';

class Tests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      debatesOpen: false,
      organizationsOpen: false,
      usersOpen: false,
      userAtDebateOpen: false,
    };
  }

  handleModaLOpen = (op) => {
    this.setState({ modalOpen: op });
  }
  
  handleDebatesOpen = () => {
    this.setState({ debatesOpen: true });
  };
  
  handleOrganizationsOpen = () => {
    this.setState({organizationsOpen: true});
  };

  handleUserOpen = () => {
    this.setState({usersOpen: true});
  };

  handleUserAtDebateOpen = () => {
    this.setState({userAtDebateOpen: true});
  };

  handleClose = () => {
    this.setState({
      debatesOpen: false,
      organizationsOpen: false,
      usersOpen: false,
      userAtDebateOpen: false,

      modalOpen: ''
    });
  };

  handleReset = () => {
    Meteor.call('test.reset', (error, result) => {
      if (error) {
        console.log('error', error);
        return;
      }
      console.log('reset done');
    });
  }

  
  handleInsertOne = () => {
    Meteor.call('test.insertOne', (error, result) => {
      if (error) {
        console.log('error', error);
        return;
      }
      console.log('insert done');
    });
  }

  handleInsertUser = (item) => {
        Meteor.call('user.insert', item, (error, result) => {
      if (error) {
        console.log('error', error);
        return;
      }
      console.log('user inserted', result);
    });
  }

  render() {

    const UserProfile = new Mongo.Collection(null);

    const actions = [
      <RaisedButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];
      
    const debateList = this.props.debates.map(item => (
      <li key={item._id}>{item._id} - {item.question}?</li>    
    ));
  
    const organizationList = this.props.organizations.map(item => (
      <li key={item._id}>{item._id} - {item.name}</li>    
    ));

    const userList = this.props.users.map(item => (
      <li key={item._id}>{item._id} - {item.name}</li>    
    ));

    const userAtDebateList = this.props.userAtDebate.map(item => (
      <li key={item.user_id+'-'+item.debate_id}>{item.user_id} - {item.debate_id}</li>    
    ));

    return (
      <div className="tests">
        <h2>Tests</h2>

        <RaisedButton label="Reset" primary onClick={() => this.handleReset()} />
        <br /><br />
        <RaisedButton label="Add one" primary onClick={() => this.handleInsertOne()} />
        
        <div className="output">{ this.output }</div>

        <table>
          <tbody>
            <tr>
              <td>Debates</td>
              <td><RaisedButton label="Detail" onClick={this.handleDebatesOpen} /></td>
            </tr>
            <tr>
              <td>Organizations</td>
              <td><RaisedButton label="Detail" onClick={this.handleOrganizationsOpen} /></td>
            </tr>
            <tr>
              <td>Users</td>
              <td><RaisedButton label="Detail" onClick={this.handleUserOpen} /></td>
            </tr>
            <tr>
              <td>User at debate</td>
              <td><RaisedButton label="Detail" onClick={this.handleUserAtDebateOpen} /></td>
            </tr>
          </tbody>
        </table>  

        <Dialog
          title="Debates"
          actions={actions}
          modal={true}
          open={this.state.debatesOpen}
        >
          <ul>
            { debateList }
          </ul> 
        </Dialog>
  
        <Dialog
          title="Organizations"
          actions={actions}
          modal={true}
          open={this.state.organizationsOpen}
        >
          <ul>
            { organizationList }
          </ul> 
        </Dialog>

        <Dialog
          title="Users"
          actions={actions}
          modal={true}
          open={this.state.usersOpen}
        >
          <ul>
            { userList }
          </ul> 
        </Dialog>

        <Dialog
          title="User at debate"
          actions={actions}
          modal={true}
          open={this.state.userAtDebateOpen}
        >
          <ul>
            { userAtDebateList }
          </ul> 
        </Dialog>

        <RaisedButton
          label="Insert user"
          primary={true}
          onClick={() => this.handleInsertUser({
            email: 'myself@example.com',
            password: '1q2w3e',
            name: 'myself really',
            bio: 'hjlhjl hjk jkl hjk hjkl jklhjkl hjl hjl'
          })}
        />

      </div>
    );

    // Meteor.loginWithPassword('john@example.com', '1q2w3e')
    // Meteor.logout()
  }
}

export default createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('users');
  Meteor.subscribe('organizations');
  
  return {
    debates: Debates.find().fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, Tests);