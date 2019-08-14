import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import cartIcon from '../static/icons-shopping-car.svg';
import Button from './styles/Button';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

const AddToCart = ({ id }) => {
  return (
    <>
      <Mutation mutation={ADD_TO_CART_MUTATION} variables={{ id }}>
        {addToCart => (
          <Button onClick={addToCart}>
            Add To Cart <img src={cartIcon} alt="cart icon" />
          </Button>
        )}
      </Mutation>
    </>
  );
};

export default AddToCart;
