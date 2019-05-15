import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from "./Items";

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

export default class DeleteItem extends Component {
  update = (cache, payload) => {
    //manually update the cache on the clkient so it matches the sever
    //read the data for the items we want
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    console.log(data);
    //filter the deleted item out of the page
    data.items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id
    );
    // put the items back
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete?")) {
                deleteItem();
              }
            }}
            className="delete-item--btn"
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}
