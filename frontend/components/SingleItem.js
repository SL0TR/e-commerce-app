import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
      price
    }
  }
`;

const SingleItemStyles = styled.div`
  width: 100%;
  display: flex;
  height: 50rem;

  .thumbnail {
    width: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .item-details {
    flex: 1;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 7rem;

    h3 {
      font-size: 4rem;
      color: #2e2e2e;
      font-weight: bold;
    }

    .item-desc {
      margin: 0.5rem 0;
      font-size: 1.7rem;
    }

    .item-price {
      color: ${props => props.theme.orange};
      font-size: 3rem;
      font-weight: bold;
      margin: 3rem 0;
    }

    button {
      background: none;
      border: none;
      border: 2px solid ${props => props.theme.primary};
      color: ${props => props.theme.primary};
      padding: 1.2rem 3rem;
      margin: 1rem 0;
      border-radius: 0.5rem;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        transition: all 0.3s;
        background-color: ${props => props.theme.primary};
        color: white;
      }
    }
  }
`;

export default class SingleItem extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading..!</p>;
          if (!data.item) return <p>No Item found for {this.props.id}</p>;
          console.log(data);
          return (
            <SingleItemStyles>
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${data.item.largeImage})` }}
              />
              <div className="item-details">
                <h3>{data.item.title}</h3>
                <p className="item-desc">{data.item.description}</p>
                <p className="item-price">
                  &#2547;
                  {data.item.price}
                </p>
                <button>Add to cart</button>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}
