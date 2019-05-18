import React, { Component } from "react";
import Form from "./styles/Form";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

export default class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <h2 className="fancy-title">Sign IN</h2>
        <Mutation
          mutation={SIGNIN_USER_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signin, { error, loading }) => (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                console.log("pressed submit");
                try {
                  const res = await signin();
                  console.log(res);
                  Router.push("/");
                } catch (e) {}
              }}
            >
              <fieldset disabled={loading}>
                <Error error={error} />
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
                <button disabled={loading}>Sign In</button>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </>
    );
  }
}
