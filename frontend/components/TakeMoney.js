import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import Nprogress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

const TakeMoney = ({ children }) => {
  const totalItems = cart =>
    cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);

  const onToken = res => {
    console.log(res);
  };

  return (
    <User>
      {({ data: { me } }) => (
        <StripeCheckout
          amount={calcTotalPrice(me.cart)}
          name="E Commerce App"
          description={`Order of ${totalItems(me.cart)} items`}
          image={me.cart[0].item && me.cart[0].item.image}
          stripeKey="pk_test_YDTowJqPsxEPO51l6lVAC9LL00ddF9ph7e"
          currency="BDT"
          email={me.email}
          token={res => onToken(res)}
        >
          {children}
        </StripeCheckout>
      )}
    </User>
  );
};
export default TakeMoney;
