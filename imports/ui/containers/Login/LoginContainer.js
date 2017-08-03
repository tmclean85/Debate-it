import { createContainer } from 'meteor/react-meteor-data';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';

export default createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');
  
  
  return {
    debates: Debates.find().fetch(),
    users: Users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Urganizations.find().fetch()
  };
}, LoginContainer);