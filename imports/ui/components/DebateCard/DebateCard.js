import React from 'react';
import Paper from 'material-ui/Paper';
import Chat from 'material-ui/svg-icons/communication/chat';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import './styles.css';

const DebateCard = ({ debateData, linkRoute }) => (
  <div className="item-card-wrapper">
    <Link to={`/${linkRoute}/${debateData._id}`} className="debate-card">
      <Paper zDepth={2}>
        <ListItem
          primaryText={`${debateData.question}?`}
          secondaryText={
            (linkRoute === "debate") ?
              `${Moment(debateData.start).format("h:mm a")} - ${Moment(debateData.end).format("h:mm a")}` 
            : null
          }
          leftIcon={<Chat />}
        />
      </Paper>
    </Link>
  </div>
);


export default DebateCard;