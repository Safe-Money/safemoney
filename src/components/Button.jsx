import styled from "styled-components"

export const Button = styled.button`
    background-color: ${props => props.bg};
    border: ${props => props.borda ? 'solid 1px #08632D': 'hidden'};
    color: ${props => props.color ? props.color : 'black'};
    height: ${props => props.height ? props.height : '50px'};
    width: ${props => props.width ? props.width : '161px'};
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
    font-weight:500;
    transition: ease 0.2s;
`

