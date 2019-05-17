import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "./ErrorMessage";

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

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
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    formError: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, confirmPassword, formError } = this.state;

    return (
      <div>
        <h2 className="fancy-title">Sign Up</h2>
        <Mutation
          mutation={CREATE_USER_MUTATION}
          variables={{
            name,
            email,
            password
          }}
        >
          {(signup, { loading, error }) => (
            <SignUpFormStyles
              onSubmit={async e => {
                e.preventDefault();
                let customError;
                console.log("pressed submit");
                if (password !== confirmPassword) {
                  this.setState({ formError: `Passwords don't match!` });
                  return;
                }
                const res = await signup();
                this.setState({ formError: null });

                console.log(res);
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading}>
                <input
                  required
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
                <input
                  required
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <input
                  required
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={this.handleChange}
                />
                <Error error={{ message: formError }} />
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter Password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                />

                <button disabled={loading}>Sign Up</button>
              </fieldset>
            </SignUpFormStyles>
          )}
        </Mutation>
      </div>
    );
  }
}
