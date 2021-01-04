import styled, { css } from 'styled-components';

const DataStyles = css`
    width: 23%;

    @media screen and (max-width: 800px) {
        width: 30%;
        font-size: 1rem;
    }
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
        min-height: 150px;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    @media screen and (max-width: 800px) {
        width: 35%;
        padding-right: 5px;
    }
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const NameContainer = styled.span`
    ${DataStyles}
`;

export const QuantityContainer = styled.span`
    ${DataStyles}
    display: flex;
`;

export const PriceContainer = styled.span`
    ${DataStyles}
`;

export const ArrowContainer = styled.div`
    cursor: pointer;
`;

export const ValueContainer = styled.span`
    margin: 0 10px;
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        padding-left: 0;
    }
`;


