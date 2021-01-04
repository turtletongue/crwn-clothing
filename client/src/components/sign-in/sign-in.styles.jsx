import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 100%;
        display: block;
        padding: 10px;
    }
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: block;
    }
`;

export const SpanContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ErrorContainer = styled.span`
    color: red;
    margin: 5px;
    text-align: center;
`;