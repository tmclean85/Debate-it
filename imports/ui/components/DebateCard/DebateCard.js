import React from 'react';
//import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import './styles.css';


const DebateCard = ({ debateData }) => (
  <div className="debate-card-wrapper">
      <div className="debate-card-main-info">
        <h1><span className="debate-card-bold">Topic:</span> {debateData.question}</h1>
        <h1><span className="debate-card-bold">Location:</span> {debateData.location}</h1>
      </div>
      <div className="debate-card-meta-info">
        <h1><span className="debate-card-bold">Start time:</span> {debateData.start}</h1>
        <h1><span className="debate-card-bold">Finish time:</span> {debateData.end}</h1>
      </div>  
  </div>
);


export default DebateCard;