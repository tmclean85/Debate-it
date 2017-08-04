import React from 'react';
//import Gravatar from 'react-gravatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';

const DebateCard = ({ debateData }) => (
  <div className="debate-card-wrapper">
    <Card>
      <CardHeader
        title={debateData.question}
        subtitle={debateData.location}
      />
      <div className="debate-card-middle-wrapper">
        <CardTitle
          title={debateData.start}
          subtitle={debateData.end}
        />
      </div>  
    </Card>
  </div>  
);

export default DebateCard;