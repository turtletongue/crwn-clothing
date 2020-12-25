import styled, { css } from 'styled-components';

const largeStyles = css`
    height: 380px;
`;

const isLarge = ({ size }) => size ? largeStyles : '';

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:first-child {
        margin-right: 7.5px;
    }
    
    &:last-child {
        margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;
    }

    ${isLarge}
`;

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;

    ${MenuItemContainer}:hover & {
        background-color: rgba(255, 255, 255, 0.9);
    }
`;

export const TitleContainer = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;

export const BackgroundImageContainer = styled.div`
    transition: 6s all;
    width: 100%;
    height: 100%;

    &:hover {
        transform: scale(1.05);
    }
`;