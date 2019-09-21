import React from 'react';
import {withRouter} from 'react-router-dom'; //an higher order component, take a comp as an arg and returns a modified component
import './menuteitem.component.scss';

const MenuItem = ({ title, img, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{backgroundImage: `url(${img}`}}/>
            <div className='content'>
              <h1 className='title'>{title.toUpperCase()}</h1>
             <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem); //now we have access to history
