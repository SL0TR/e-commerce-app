import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import Link from "next/link";
import DeleteItem from "./DeleteItem";

// Icons
import editIcon from "../static/icons-edit.svg";
import deleteIcon from "../static/icons-delete.svg";
import cartIcon from "../static/icons-shopping-car.svg";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles user={true}>
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
            <a>
              &#2547;
              {item.price}
            </a>
          </Link>
        </Title>
        {/* <PriceTag>{ formatMoney(item.price) }</PriceTag> */}
        <p className="card-title">
          {item.title.length > 25
            ? ` ${item.title.substr(0, 22)}...`
            : item.title}
        </p>
        <p className="card-desc">
          {item.description.length > 60
            ? ` ${item.description.substr(0, 57)}...`
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
          <button className="add-cart--btn">
            Add to Cart <img src={cartIcon} alt="cart icon" />
          </button>
          <DeleteItem id={item.id}>
            <img src={deleteIcon} alt="delete icon" />
          </DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}
