import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
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
            <Form
              onSubmit={async e => {
                e.preventDefault();
                let customError;
                console.log("pressed submit");
                if (password !== confirmPassword) {
                  this.setState({ formError: `Passwords don't match!` });
                  return;
                }
                try {
                  const res = await signup();
                  this.setState({ formError: null });
                  console.log(res);
                } catch (err) {}
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
            </Form>
          )}
        </Mutation>
      </div>
    );
  }
}
