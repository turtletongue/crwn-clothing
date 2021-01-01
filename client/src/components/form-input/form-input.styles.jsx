import styled, { css } from 'styled-components';

const ShrinkLabelStyles = css`
    top: -14px;
    font-size: 12px;
    color: black;
`;

export const GroupContainer = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: black;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;
    letter-spacing: ${({ type }) => type === 'password' ? '0.2rem' : ''};

    &:focus {
        outline: none;
    }
`;


export const FormInputLabelContainer = styled.label`
    color: grey;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${({ valueLength }) => valueLength ? ShrinkLabelStyles : ''}

    ${FormInputContainer}:focus & {
        ${ShrinkLabelStyles}
    }
`;