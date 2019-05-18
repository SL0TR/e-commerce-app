import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
// import formatMoney from '../lib/formatMoney';
import Error from "./ErrorMessage";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

export default class CreateItem extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "e-commerce-app");
    console.log(data);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/sl0tr/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };
  render() {
    return (
      <div>
        <h2 className="fancy-title">Add New Product</h2>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
          {(createItem, { loading, error }) => (
            <Form
              onSubmit={async e => {
                // Stop the form from submitting
                e.preventDefault();

                // change them to single item page
                const res = await createItem();
                console.log(res);
                Router.push({
                  pathname: "/item",
                  query: {
                    id: res.data.createItem.id
                  }
                });
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label for="file">Upload an image</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  onChange={this.uploadFile}
                  required
                />
                {this.state.image && (
                  <img
                    src={this.state.image}
                    style={{ height: "200px", width: "200px" }}
                    alt="upload preview"
                  />
                )}
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter Product Title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter Product Price"
                  value={this.state.price}
                  onChange={this.handleChange}
                  required
                />
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                />
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </div>
    );
  }
}

export { CREATE_ITEM_MUTATION };
