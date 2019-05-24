import React, { Component } from "react";
import Form from "./styles/Form";
import Button from "./styles/Button";
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

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export default class SignInForm extends Component {
  state = {
    email: "",
    password: "",
    passwordReset: false,
    getTokenEmail: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleResetPassword = e => {
    e.preventDefault();
    this.setState({ passwordReset: true });
  };

  render() {
    const { email, password, passwordReset, getTokenEmail } = this.state;

    return (
      <>
        {!passwordReset && (
          <>
            <h2 className="fancy-title">Sign IN</h2>
            <Mutation
              mutation={SIGNIN_USER_MUTATION}
              variables={{ email, password }}
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
                    <Button disabled={loading}>Sign In</Button>
                    <Button
                      type="flat"
                      disabled={loading}
                      onClick={this.handleResetPassword}
                    >
                      Reset Password
                    </Button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          </>
        )}

        {passwordReset && (
          <>
            <h2 className="fancy-title">Password Reset</h2>
            <Mutation
              mutation={REQUEST_RESET_MUTATION}
              variables={{ email: getTokenEmail }}
            >
              {(requestReset, { error, loading }) => (
                <Form
                  onSubmit={async e => {
                    e.preventDefault();
                    try {
                      const res = await requestReset();
                      console.log(res);
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  <fieldset>
                    <Error error={error} />
                    <input
                      required
                      type="email"
                      placeholder="Enter Email"
                      name="getTokenEmail"
                      value={getTokenEmail}
                      onChange={this.handleChange}
                    />
                    <Button color="secondary">Send Verification Code</Button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          </>
        )}
      </>
    );
  }
}
