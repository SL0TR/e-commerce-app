import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { useAlert } from "react-alert";
import { CURRENT_USER_QUERY } from "./User";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

const SignOut = () => {
  const alert = useAlert();

  const handleSignOut = signout => {
    signout();
    alert.success(`You have signed out! `);
  };
  return (
    <Mutation
      mutation={SIGNOUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {signout => (
        <button onClick={() => handleSignOut(signout)}>Sign Out</button>
      )}
    </Mutation>
  );
};

export default SignOut;
