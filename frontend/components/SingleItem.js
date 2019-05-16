import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";

const SingleItemStyles = styled.div`
  width: 100%;
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
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
          return <p>Single Item</p>;
        }}
      </Query>
    );
  }
}
