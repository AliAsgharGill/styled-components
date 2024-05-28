import styled from "styled-components";
// import "src/sass/main.scss";
// import '../../../sass/_variables.scss'
import { primaryColor, secondaryColor } from "../../../sass/variables";
const Button = styled.button`
  background-color: ${primaryColor};
  color: black;
  font-weight: bold;
  padding: 30px 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${secondaryColor};
  }
`;

export default Button;
