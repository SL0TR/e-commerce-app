import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import styled from "styled-components";
import Item from "./Item";
import Pagination from "./Pagination";
import { perPage } from "../config";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first:  Int = ${perPage}) {
    items(first: $first,skip: $skip, orderBy: createdAt_DESC ) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 7rem;
  max-width: ${props => props.theme.maxWidth};
  margin: 5rem auto;
`;

export default class Items extends Component {
  render() {
    return (
      <Center>
        <Pagination page={this.props.page} />
        <Query
          query={ALL_ITEMS_QUERY}
          fetchPolicy="network-only"
          variables={{
            skip: this.props.page * perPage - perPage
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error! : {error.message} </p>;
            console.log(data);
            return (
              <ItemsList>
                {data.items.map(item => {
                  return <Item item={item} key={item.id} />;
                })}
              </ItemsList>
            );
          }}
        </Query>
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export { ALL_ITEMS_QUERY };
