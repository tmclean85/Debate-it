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
       <Link to='/currentdebate'>
       <Paper className="debate-paper" style={style} zDepth={4} >

      <ListItem 
        primaryText={debateData.question} 
        secondaryText={debateData.start}
        leftIcon={<Chat />}
      />
      </Paper>
      </Link>

    </List>  
  </div>  


  // <div className="debate-card-wrapper">
  //   <Link to='/currentdebate'>
  //   <Paper className="debate-paper" style={style} zDepth={4} >
  //     <div>
  //       <h1><span className="debate-card-bold">Topic:</span> {debateData.question}</h1>
  //       <h1><span className="debate-card-bold">Location:</span> {debateData.location}</h1>
  //       <h1><span className="debate-card-bold">Start time:</span> {debateData.start}</h1>
  //       <h1><span className="debate-card-bold">Finish time:</span> {debateData.end}</h1>
  //     </div>  
  //   </Paper>  
  //   </Link>
  // </div>
);


export default DebateCard;