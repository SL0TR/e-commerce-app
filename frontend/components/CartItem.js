import React from 'react';
import styled from 'styled-components';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  padding-right: 3rem;
  grid-template-columns: auto 1fr auto;

  img {
    margin-right: 10px;
  }
`;

const CartItem = ({ cartItem }) => {
  if (!cartItem.item) return null;
  const {
    item: { title, price, image },
    quantity,
    id,
  } = cartItem;
  return (
    <CartItemStyles>
      <img width="75" height="75" src={image} alt={title} />
      <div className="cart-item-details">
        <h3>{title}</h3>
        <h4>
          &#2547;{price * quantity} -{' '}
          <em>
            {quantity} &times; &#2547;{price}{' '}
          </em>
        </h4>
      </div>
      <RemoveFromCart id={id} />
    </CartItemStyles>
  );
};

export default CartItem;
