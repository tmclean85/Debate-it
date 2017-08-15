import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import DebateAttendees from '../CurrentDebate/DebateAttendees';
import Avatar from 'material-ui/Avatar';
import Masonry from 'react-masonry-component';
import Gravatar from 'react-gravatar';

import { List, ListItem } from 'material-ui/List';
import './styles';

const debatorScreen = ({ debate, handleAttend }) => (
  <div className="debate-results-wrapper">
    <Paper zDepth={2}>
      <div className="debate-results-header">
        <h1>Current Debate</h1>
      </div>
      <Card>
        <CardTitle
          subtitle="Currently up for debate"
          title={`${debate.question}?`}
          className="debate-results-question"
        />
        <div className="debator-info">
          <CardHeader
            title={
              (Meteor.userId() === debate.yesUser_id)
                ? debate.yesUser.name
                : debate.noUser.name
            }
            avatar={<Gravatar email={
              (Meteor.userId() === debate.yesUser_id)
                ? debate.yesUser.email
                : debate.noUser.email} />
            }
          />
        </div>
        <CardTitle title="Your Argument..." />
        <CardText className="argument-text">
          {(Meteor.userId() === debate.yesUser_id)
            ? debate.yesBecause
            : debate.noBecause}
        </CardText>
        <div className="debate-response-wrapper">
          <div className="debate-response-header">
            <h1>Check-In Attendees</h1>
          </div>
          <div className="to-check-in-header">
            <h2>Attendees To Check-In</h2>
          </div>
          <Paper className="audience-responses-wrapper">
            <div>
              <Masonry>
                {debate.userList.map((item, index) =>
                  (!item.attended) ?
                    <div className="response-card-wrapper" key={index}>
                      <Paper zDepth={2} className="audience-response-card">
                        <ListItem
                          primaryText={item.name}
                          leftIcon={<Gravatar email={item.email} />}
                          rightIcon={<Checkbox
                            checked={item.attended}
                            onCheck={()=>handleAttend(item._id, debate._id)}
                          />}
                          key={index}
                        />
                      </Paper>
                    </div>
                    : null
                )}
              </Masonry>
            </div>
          </Paper>
          <div className="to-check-in-header">
            <h2>Current Attendees</h2>
          </div>
          <Paper className="audience-responses-wrapper">
            <div>
              <Masonry>
                {debate.userList.map((item, index) =>
                  (item.attended) ?
                    <div className="response-card-wrapper" key={index}>
                      <Paper zDepth={2} className="audience-response-card">
                        <ListItem
                          primaryText={item.name}
                          leftIcon={<Gravatar email={item.email} />}
                          rightIcon={<Checkbox
                            checked={item.attended}
                            onCheck={()=>handleAttend(item._id, debate._id)}
                          />}
                          key={index}
                        />
                      </Paper>
                    </div>
                    : null
                )}
              </Masonry>
            </div>
          </Paper>
        </div>
      </Card>
    </Paper>
  </div>
);

export default debatorScreen;
