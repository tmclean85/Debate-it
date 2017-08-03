import React from 'react';
import Gravatar from 'react-gravatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';

const DebateCard = () => {
  <div className="debate-card-wrapper">
    <Card>
      <CardHeader
      {/* title={Debate title here} */}
      {/* subtitle={Debate question here} */}
      />
      <div className="debate-card-middle-wrapper">
        <CardTitle
          title="Yes"
        />
      </div>  
    </Card>
  </div>  
};

export default DebateCard;