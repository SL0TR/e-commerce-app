import React, { Component } from "react";
import styled from "styled-components";

const SignUpFormStyles = styled.form`
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

    input {
      border: 2px solid ${props => props.theme.green};
      padding: 1.25rem 1rem;
      border-radius: 0.2rem;
      width: 100%;
      margin: 3rem 0;

      &::placeholder {
        font-size: 1.8rem;
      }
    }

    button {
      border: none;
      background-color: ${props => props.theme.primary};
      padding: 1rem 4rem;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.8rem;
      border-radius: 0.5rem;
      cursor: pointer;
      margin: 1rem auto;
      color: white;
    }
  }
`;

export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        <h2 className="fancy-title">Sign Up</h2>
        <SignUpFormStyles>
          <fieldset disabled={false}>
            <input type="text" placeholder="Enter Name" name="name" />
            <input type="email" placeholder="Enter Email" name="email" />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
            />
            <input type="password" placeholder="Re-enter Password" />
            <button>Sign Up</button>
          </fieldset>
        </SignUpFormStyles>
      </div>
    );
  }
}
