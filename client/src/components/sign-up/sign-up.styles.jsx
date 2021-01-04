import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width: 800px) {
        width: 100%;
        display: block;
        padding: 10px;
    }
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`;

export const ErrorContainer = styled.span`
    color: red;
    margin: 5px;
    text-align: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between
`;