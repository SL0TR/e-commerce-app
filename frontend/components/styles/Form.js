import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  max-width: 40rem;
  margin: 0 auto;
  box-shadow: ${props => props.theme.bs};
  padding: 4rem;
  border-radius: 1rem;

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &[disabled] {
      opacity: 0.5;
    }

    label[for="file"] {
      position: relative;
      top: 1.5rem;
    }

    input,
    textarea {
      border: 2px solid ${props => props.theme.green};
      padding: 1.25rem 1rem;
      border-radius: 0.2rem;
      width: 100%;
      margin: 3rem 0;

      &::placeholder {
        font-size: 1.8rem;
      }
    }
  }
`;

export default Form;
