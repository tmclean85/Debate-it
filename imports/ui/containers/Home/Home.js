import React from 'react';
import Divider from 'material-ui/Divider';
import DebateCard from '../../components/DebateCard';
import Masonry from 'react-masonry-component';
import Header from '../../components/Header';
import './styles.css';

const Home = ({ debateData }) => (
    <div className="debateCardList-wrapper">
        <div className="debate-header current">
            <h1>Current Debates</h1>
        </div>
        <Masonry>
            {debateData.map(debate =>
                (<DebateCard 
                    debateData={debate} 
                    key={debate._id} 
                    linkRoute={"debate"}
                />)
            )}
        </Masonry>
            <br />
            <Divider />
        <div className="debate-header past">
            <h1>Past Debates</h1>
        </div>
        <Masonry>
            {debateData.map(debate =>
                (<DebateCard 
                    debateData={debate} 
                    key={debate._id} 
                    linkRoute={"results"}
                />)
            )}
        </Masonry>
    </div>
);

export default Home;