import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import Link from "next/link";
import DeleteItem from "./DeleteItem";
// import formatMoney from '../lib/formatMoney';
import editIcon from "../assets/icons/icons-edit.svg";
import deleteIcon from "../assets/icons/icons-delete.svg";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && (
          <div
            className="item-thumb"
            style={{ backgroundImage: `url(${item.image})` }}
          />
        )}
        <Title>
          <Link
            href={{
              pathname: "/item",
              query: { id: item.id }
            }}
          >
            <a>{`BDT ${item.price}`}</a>
          </Link>
        </Title>
        {/* <PriceTag>{ formatMoney(item.price) }</PriceTag> */}
        <p className="card-title">{item.title}</p>
        <p className="card-desc">
          {item.description.length > 70
            ? ` ${item.description.substr(0, 67)}...`
            : item.description}
        </p>
        <div className="buttonList">
          <Link
            href={{
              pathname: "/update",
              query: { id: item.id }
            }}
          >
            <a className="edit-item--btn">
              <img src={editIcon} alt="edit icon" />
            </a>
          </Link>
          <button className="add-cart--btn">Add to Cart</button>
          <DeleteItem id={item.id}>
            <img src={deleteIcon} alt="delete icon" />
          </DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}
