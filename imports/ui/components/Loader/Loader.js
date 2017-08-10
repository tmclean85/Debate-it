import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css';

// brackets mean implicit return
const Loader = () => (
    <div className="loader-wrapper">
        <CircularProgress />
    </div>
);

export default Loader;
