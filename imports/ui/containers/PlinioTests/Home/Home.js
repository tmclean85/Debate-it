import React from 'react';
import DebateCard from '../../../components/DebateCard';
import Header from '../../../components/Header';

const Home = ({ debateData }) => (
    <div className="DebateCardList-wrapper">
        {/* <Masonry> */}
            {debateData.map(debate =>
                (<DebateCard debateData={debate} key={debate._id} />)
            )}
        {/* </Masonry> */}
    </div>
);

export default Home;