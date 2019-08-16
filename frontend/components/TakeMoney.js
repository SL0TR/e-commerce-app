import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import Nprogress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import User, { CURRENT_USER_QUERY } from './User';
import { useAlert } from 'react-alert';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

const TakeMoney = ({ children }) => {
  const alert = useAlert();

  const totalItems = cart =>
    cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);

  const onToken = async (res, createOrder) => {
    // manually called the mutation
    const order = await createOrder({
      variables: {
        token: res.id,
      },
    }).catch(error => {
      alert.error(`Oops: ${error.message}`);
    });

    console.log(order);
  };

  return (
    <User>
      {({ data: { me } }) => (
        <Mutation
          mutation={CREATE_ORDER_MUTATION}
          refetchQueries={[{ queries: CURRENT_USER_QUERY }]}
        >
          {createOrder => (
            <StripeCheckout
              amount={calcTotalPrice(me.cart) * 100}
              name="E Commerce App"
              description={`Order of ${totalItems(me.cart)} items`}
              image={me.cart[0] && me.cart[0].item && me.cart[0].item.image}
              stripeKey="pk_test_YDTowJqPsxEPO51l6lVAC9LL00ddF9ph7e"
              currency="BDT"
              email={me.email}
              token={res => onToken(res, createOrder)}
            >
              {children}
            </StripeCheckout>
          )}
        </Mutation>
      )}
    </User>
  );
};
export default TakeMoney;
