import styled from "styled-components";

const Button = styled.button`
   {
    border: none;
    background-color: ${props =>
      props.type === "flat" ? "white" : props.theme.primary};
    padding: 1rem 4rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    border: 1px solid
      ${props => (props.type === "flat" ? props.theme.primary : "transparent")};
    border-radius: 0.5rem;
    cursor: pointer;
    color: ${props => (props.type === "flat" ? props.theme.primary : "white")};
    margin: 1.5rem auto;
    display: inline-block;
  }
`;

export default Button;
