import styled from "styled-components"

export const Button = styled.button`
    background-color: ${props => props.bg};
    border: ${props => props.borda ? 'solid 1px #399B53': 'hidden'};
    color: ${props => props.color ? props.color : 'black'};
    height: 53px;
    width: 161px;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
    font-weight:560;
`

