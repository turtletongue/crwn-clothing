import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from './menu-item.styles.jsx';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer style={{
                background: `url(${imageUrl}) no-repeat center center`,
                backgroundSize: 'cover'
            }} />
            <ContentContainer>
                <TitleContainer>{ title.toUpperCase() }</TitleContainer>
                <SubtitleContainer>SHOP NOW</SubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    );
}

export default withRouter(MenuItem);