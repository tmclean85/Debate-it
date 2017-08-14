import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionStars from 'material-ui/svg-icons/action/stars';
import Gravatar from 'react-gravatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './styles.css';
import DebatorResultsCard from './ResultsComponents/DebatorResultCard';
import Masonry from 'react-masonry-component';

//users, userAtDebate, debateInfo, calculateResults, calculateLoser

const DebateResults = ({ debate }) => (
    <div className="debate-results-wrapper">
        <Paper zDepth={2}>
            <div className="debate-results-header">
                <h1>Debate Results</h1>
            </div>
            <Card>
                <CardTitle
                    title={`${debate.question}?`}
                    className="debate-results-question"
                />
                {((debate.undecidedVotes > debate.yesVotes
                    && debate.undecidedVotes > debate.noVotes)
                    || (debate.undecidedVotes === 0 && debate.yesVotes === 0 && debate.noVotes === 0))
                    ? <div className="debate-response-wrapper">
                    <Paper zDepth={1}>
                        <div className="debate-undecided-header">
                            <h1>Winner Undecided!</h1>
                        </div>
                        <CardText className="undecided-card-text">Sadly, the audience has spoken and this was debate undecided! Neither of our two competitors were convincing enough.</CardText>
                    </Paper>
                    </div>
                    : <div className="debators-results-wrapper">
                        <DebatorResultsCard
                            status="Winner!"
                            title={
                                (debate.yesVotes > debate.noVotes)
                                    ? debate.yesUser.name
                                    : (debate.noVotes > debate.yesVotes)
                                    && debate.noUser.name
                            }
                            position={
                                (debate.yesVotes > debate.noVotes)
                                    ? "YES"
                                    : (debate.noVotes > debate.yesVotes)
                                    && "NO"
                            }
                            votes={
                                (debate.yesVotes > debate.noVotes)
                                    ? debate.yesVotes
                                    : (debate.noVotes > debate.yesVotes)
                                    && debate.noVotes
                            }
                            email={(debate.yesVotes > debate.noVotes)
                                ? debate.yesUser.email
                                : (debate.noVotes > debate.yesVotes)
                                && debate.noUser.email
                            }
                        />
                        <div className="versus-wrapper">
                            <h1>VS</h1>
                        </div>
                        <DebatorResultsCard
                            status="Loser!"
                            title={
                                (debate.yesVotes < debate.noVotes)
                                    ? debate.yesUser.name
                                    : (debate.noVotes < debate.yesVotes)
                                    && debate.noUser.name
                            }
                            position={
                                (debate.yesVotes < debate.noVotes)
                                    ? "YES"
                                    : (debate.noVotes < debate.yesVotes)
                                    && "NO"
                            }
                            votes={
                                (debate.yesVotes < debate.noVotes)
                                    ? debate.yesVotes
                                    : (debate.noVotes < debate.yesVotes)
                                    && debate.noVotes
                            }
                            email={(debate.yesVotes < debate.noVotes)
                                ? debate.yesUser.email
                                : (debate.noVotes < debate.yesVotes)
                                && debate.noUser.email
                            }
                        />
                    </div>
                }
                <div className="debate-response-wrapper">
                    <div className="debate-response-header">
                        <h1>The Audience Said...</h1>
                    </div>
                    <Paper className="audience-responses-wrapper">
                        <Masonry>
                            {debate.userList.map(item =>
                                (item.attended) ?
                                    <div className="response-card-wrapper">
                                        <Paper zDepth={2} className="audience-response-card">
                                            <ListItem
                                                primaryText={
                                                    <div>
                                                        <span className="audience-position">
                                                            {(item.vote === null) ? "UNDECIDED" : (item.vote) ? "YES" : "NO"}
                                                        </span>
                                                        <span className="audience-text">
                                                            {item.because}
                                                        </span>
                                                    </div>
                                                }
                                                secondaryText={item.name}
                                                leftIcon={<Gravatar email={item.email} />}
                                            />
                                        </Paper>
                                    </div>
                                    : null
                            )}
                        </Masonry>
                    </Paper>
                </div>
            </Card>
        </Paper>
    </div>
);

export default DebateResults;
