import React, { useState } from 'react';
import Downshift from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { debounce } from 'lodash';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      title
      image
    }
  }
`;

const AutoCOmplete = () => {
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(false);

  const onChange = debounce(async (e, client) => {
    console.log('searching');
    setloading(true);

    // manually query apollo client
    const {
      data: { items },
    } = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value },
    });
    setItems(items);
    setloading(false);
    console.log(items);
  }, 350);

  return (
    <SearchStyles>
      <div>
        <ApolloConsumer>
          {client => (
            <input
              type="search"
              onChange={e => {
                e.persist();
                onChange(e, client);
              }}
            />
          )}
        </ApolloConsumer>
        <DropDown>
          {items.map((item, i) => (
            <DropDownItem key={i}>
              <img width="50" height="50" src={item.image} alt={item.title} />
              {item.title}
            </DropDownItem>
          ))}
        </DropDown>
      </div>
    </SearchStyles>
  );
};

export default AutoCOmplete;
