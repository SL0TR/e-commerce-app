import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Button from "./styles/Button";
import Error from "./ErrorMessage";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int # $image: String # $largeImage: String
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price # image: $image # largeImage: $largeImage
    ) {
      id
      title
      description
      price
    }
  }
`;

export default class UpdateItem extends Component {
  state = {};

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    console.log("updated");
    console.log(this.state);
    console.log(this.props.id);
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    console.log(res);
  };

  // uploadFile = async e => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append('file', files[0]);
  //   data.append('upload_preset', 'e-commerce-app');
  //   console.log(data);
  //   const res = await fetch('https://api.cloudinary.com/v1_1/sl0tr/image/upload', {
  //     method: 'POST',
  //     body: data,
  //   });
  //   const file = await res.json();
  //   console.log(file)
  //   this.setState({
  //     image: file.secure_url,
  //     largeImage: file.eager[0].secure_url,
  //   });
  // };
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No item found for {this.props.id} </p>;
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItem, { loading, error }) => (
                <Form onSubmit={e => this.updateItem(e, updateItem)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    {/* <label htmlFor="file">
                      Image
                      <input
                        type="file"
                        id="file"
                        name="file"
                        placeholder="Upload an image"
                        onChange={this.uploadFile}
                        required
                      />
                       {this.state.image && <img src={this.state.image} style={ {height: '200px', width: '200px'}} alt="upload preview" />}
                    </label> */}
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      defaultValue={data.item.title}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Price"
                      defaultValue={data.item.price}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Description"
                      defaultValue={data.item.description}
                      onChange={this.handleChange}
                      required
                      rows="6"
                    />
                    <Button>Sav{loading ? "ing" : "e"} Changes</Button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export { UPDATE_ITEM_MUTATION };
