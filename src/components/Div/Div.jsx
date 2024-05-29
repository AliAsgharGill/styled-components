import styled from "styled-components"


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #0a3f73b8;
    justify-content:space-around ;
    /* background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: ${props => props.theme.fontFamily}; */
    transition: all 0.3s ease;
`

// const Div = (props) => {
//     return (
//         <div className={props.className}>
//             {props.children}
//         </div>
//     )
// }