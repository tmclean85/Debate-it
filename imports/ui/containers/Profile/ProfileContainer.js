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
    Debates: debates.find().fetch(),
    Users: users.find().fetch(),
    UserAtDebate: userAtDebate.find().fetch(),
    Organizations: organizations.find().fetch()
  };
}, App, ProfileContainer);