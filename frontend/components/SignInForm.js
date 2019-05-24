import React, { useState } from "react";
import Form from "./styles/Form";
import Button from "./styles/Button";
import { Mutation } from "react-apollo";
import { useAlert } from "react-alert";
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

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getTokenEmail, setTokenEmail] = useState("");
  const [passwordReset, setPasswordReset] = useState(false);
  const alert = useAlert();

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
                    alert.success(`
                      "You have successfully logged in, ${
                        res.data.signin.name
                      } `);
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
                    onChange={e => setEmail(e.target.value)}
                  />
                  <input
                    required
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Button disabled={loading}>Sign In</Button>
                  <Button
                    type="flat"
                    disabled={loading}
                    onClick={e => setPasswordReset(true)}
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
          <h2 className="fancy-title">Request Reset</h2>
          <Mutation
            mutation={REQUEST_RESET_MUTATION}
            variables={{ email: getTokenEmail }}
          >
            {(requestReset, { error, loading, called }) => (
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
                  {!error && !loading && called && (
                    <p>Success, Check your email!</p>
                  )}
                  <input
                    required
                    type="email"
                    placeholder="Enter Email"
                    name="getTokenEmail"
                    value={getTokenEmail}
                    onChange={e => setTokenEmail(e.target.value)}
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
};

export default SignInForm;
