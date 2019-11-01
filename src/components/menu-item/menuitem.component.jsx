import React from 'react';
import {withRouter} from 'react-router-dom'; //an higher order component, take a comp as an arg and returns a modified component
import {Title, Subtitle, BackgroundImage, Content, MenuItemContainer} from "./menuitem.styles";

const MenuItem = ({ title, img, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage className='background-image' style={{backgroundImage: `url(${img}`}}/>
            <Content className='content'>
              <Title className='title'>{title.toUpperCase()}</Title>
             <Subtitle className='subtitle'>SHOP NOW</Subtitle>
        </Content>
    </MenuItemContainer>
);

export default withRouter(MenuItem); //now we have access to history
