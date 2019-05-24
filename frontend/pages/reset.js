import React, { Component } from "react";
import Router from "next/router";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Button from "../components//styles/Button";
import Form from "../components//styles/Form";
import Error from "../components/ErrorMessage";
import { CURRENT_USER_QUERY } from "../components/User";

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION($resetToken: String!, $password: String!) {
    resetPassword(resetToken: $resetToken, password: $password) {
      id
      email
      name
    }
  }
`;

export default class Reset extends Component {
  state = {
    password: "",
    confirmPassword: "",
    resetToken: this.props.query.resetToken || "",
    formError: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { confirmPassword, password, resetToken, formError } = this.state;

    return (
      <>
        <h2 className="fancy-title">Reset Account Passwsord</h2>
        <Mutation
          mutation={RESET_PASSWORD_MUTATION}
          variables={{ resetToken, password }}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(resetPassword, { error, loading, called }) => (
            <Form
              onSubmit={async e => {
                e.preventDefault();
                if (password !== confirmPassword) {
                  this.setState({ formError: `Passwords don't match!` });
                  return;
                }
                try {
                  const res = await resetPassword();
                  Router.push("/");
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              <fieldset>
                <Error error={error} />
                <Error error={{ message: formError }} />
                <input
                  required
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={this.handleChange}
                />
                <input
                  required
                  value={confirmPassword}
                  type="password"
                  placeholder="Re-Enter Password"
                  name="confirmPassword"
                  onChange={this.handleChange}
                />
                <Button>Change Password</Button>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </>
    );
  }
}
