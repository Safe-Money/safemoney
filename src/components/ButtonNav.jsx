import styled from "styled-components"

export const Button = styled.button`
    background-color: ${props => props.bg};
    border: ${props => props.borda ? 'solid 1px #399B53': 'hidden'};
    color: ${props => props.color ? props.color : 'black'};
    height: 45px;
    width: 110px;
    font-weight:500;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
`