import React from 'react';
import Paper from 'material-ui/Paper';
import Chat from 'material-ui/svg-icons/communication/chat';
import {List, ListItem} from 'material-ui/List';
import { Link } from 'react-router-dom';
import './styles.css';

const style = {
  height: 70,
  width: 800,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const DebateCard = ({ debateData }) => (
  <div className="debate-card-wrapper">
    <List className="debate-list">
       <Link to={`/debate/${debateData._id}`}>
       <Paper className="debate-paper" style={style} zDepth={4} >

      <ListItem 
        primaryText={debateData.question} 
        secondaryText="start time"
        leftIcon={<Chat />}
      />
      </Paper>
      </Link>

    </List>  
  </div>  
);


export default DebateCard;