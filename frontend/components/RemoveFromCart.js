import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { useAlert } from 'react-alert';

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const RemoveButton = styled.button`
  display: inline-block;
  color: black;
  position: relative;
  left: 2rem;
  cursor: pointer;
  font-size: 25px;
  transition: all 0.3s linear;

  &:hover {
    color: ${props => props.theme.red};
    font-weight: bold;
  }
`;

const RemoveFromCart = ({ id }) => {
  const alert = useAlert();

  const update = (cache, payload) => {
    //read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });

    //remove the item from the cart
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);

    //write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  return (
    <Mutation
      mutation={REMOVE_FROM_CART_MUTATION}
      variables={{ id }}
      update={update}
      optimisticResponse={{
        __typename: 'Mutation',
        removeFromCart: {
          __typename: 'CartItem',
          id,
        },
      }}
    >
      {(removeFromCart, { loading, error }) => (
        <RemoveButton
          disabled={loading}
          onClick={() => {
            console.log('clicked');
            removeFromCart().catch(error => {
              alert.success(`Oops: ${error.message}`);
            });
          }}
          title="Delete Item"
        >
          &times;
        </RemoveButton>
      )}
    </Mutation>
  );
};

export default RemoveFromCart;
