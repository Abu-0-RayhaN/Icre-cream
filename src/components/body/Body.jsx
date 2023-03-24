import React from 'react';
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';
import classes from './body.module.css';

const Body = () => {
    return (
        <div className={classes.mainBody}>
            <IceCreamBuilder />
        </div>
    );
};

export default Body;