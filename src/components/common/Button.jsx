import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.primary ? "blue" : "black"} ;
    color: ${props => props.primary ? "white" : "black"} ;
    font-weight: bolder;
    padding: 0.5em 2em;
    border: ${props => props.primary ? "none" : "1px solid black"} ;
    box-shadow: ${props => props.primary ? "0.5px 0.5px 5px black" : "5px 5px 0px black"} ;
    border-radius: 0.5em;
    padding: 5p 10em;
    font-size: 2em;
    cursor: pointer;
    transition: all 1s ease;
    &:hover {
        background-color: white;
        color: black;
    }  `


export const SecondaryButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: red;
        color: black;
    }
`

