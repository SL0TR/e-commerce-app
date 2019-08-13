import styled from 'styled-components';

const Button = styled.button`
   {
    border: none;
    background-color: ${props =>
      props.bType === 'flat'
        ? 'white'
        : props.theme[props.color ? props.color : 'primary']};
    padding: 1rem 4rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    border: 1px solid
      ${props =>
        props.bType === 'flat'
          ? props.theme[props.color ? props.color : 'primary']
          : 'transparent'};
    border-radius: 0.5rem;
    cursor: pointer;
    color: ${props =>
      props.bType === 'flat'
        ? props.theme[props.color ? props.color : 'primary']
        : 'white'};
    margin: 1.5rem auto;
    display: inline-block;

    &:disabled {
      background-color: ${props => props.theme.lightgrey};
    }
  }
`;

export default Button;
