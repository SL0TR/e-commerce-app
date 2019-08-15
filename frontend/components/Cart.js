import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Button from './styles/Button';
import User from './User';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import TakeMoney from './TakeMoney';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Cart = () => (
  <User>
    {({ data: { me } }) => {
      if (!me) return null;
      console.log(me);
      return (
        <Mutation mutation={TOGGLE_CART_MUTATION}>
          {toggleCart => (
            <Query query={LOCAL_STATE_QUERY}>
              {({ data: { cartOpen } }) => (
                <CartStyles open={cartOpen}>
                  <CloseButton onClick={toggleCart} title="close">
                    &times;
                  </CloseButton>
                  <header>
                    <h2 className="fancy-title">Cart</h2>
                    <p>{`${me.name}'s cart has ${
                      me.cart.length
                    } items in it`}</p>
                  </header>
                  <ul>
                    {me.cart.map(cartItem => (
                      <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))}
                  </ul>
                  <footer>
                    <p>&#2547;{calcTotalPrice(me.cart)}</p>
                    <TakeMoney>
                      <Button>Checkout</Button>
                    </TakeMoney>
                  </footer>
                </CartStyles>
              )}
            </Query>
          )}
        </Mutation>
      );
    }}
  </User>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
