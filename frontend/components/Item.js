import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import Link from 'next/link';
// import formatMoney from '../lib/formatMoney';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        
        {item.image && <div className="item-thumb" style={ { backgroundImage: `url(${item.image})` } }></div> }
        <Title>
          <Link href={{
            pathname: '/item',
            query: { id: item.id }
          }}>
            <a>{ `BDT ${item.price}`}</a>
          </Link>
        </Title>
        {/* <PriceTag>{ formatMoney(item.price) }</PriceTag> */}
        <p className="card-title">{item.title}</p>
        <p className="card-desc">{item.description}</p>
        <div className="buttonList">
          {/* <Link href={{
            pathname: "update",
            query: { id: item.id }
          }}>
            <a>Edit </a>
          </Link> */}
          <button className="add-cart--btn">Add to Cart</button>
          {/* <button>Delete</button> */}
        </div>
      </ItemStyles>
    )
  }
}
