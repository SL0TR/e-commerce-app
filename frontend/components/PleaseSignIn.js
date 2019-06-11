import React from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import SignInForm from './SignInForm';
import Spinner from './Spinner';

const PleaseSignIn = props => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { me } }, loading) => {
        if (loading) return <Spinner />;
        if (!me) {
          return (
            <>
              <h3 style={{ textAlign: 'center' }}>
                Please sign in before continuing!
              </h3>
              <SignInForm />
            </>
          );
        }
        return props.children;
      }}
    </Query>
  );
};

export default PleaseSignIn;
