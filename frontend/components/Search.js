import React, { useState } from 'react';
import Downshift, { resetIdCounter } from 'downshift';
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
    if (e.target.value === '') {
      setItems([]);
      return;
    }

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

  const routeToItem = item => {
    Router.push({
      pathname: '/item',
      query: {
        id: item.id,
      },
    });
  };

  resetIdCounter();

  return (
    <SearchStyles>
      <Downshift
        onChange={routeToItem}
        itemToString={item => (item === null ? '' : item.title)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
        }) => (
          <div>
            <ApolloConsumer>
              {client => (
                <input
                  {...getInputProps({
                    onChange: e => {
                      e.persist();
                      onChange(e, client);
                    },
                    type: 'search',
                    placeholder: 'Search for an item',
                    id: 'search',
                    className: loading ? 'loading' : '',
                  })}
                />
              )}
            </ApolloConsumer>
            {isOpen && (
              <DropDown>
                {items.map((item, i) => (
                  <DropDownItem
                    {...getItemProps({ item })}
                    key={i}
                    highlighted={i === highlightedIndex}
                  >
                    <img
                      width="50"
                      height="50"
                      src={item.image}
                      alt={item.title}
                    />
                    {item.title}
                  </DropDownItem>
                ))}
                {!items.length && !loading && (
                  <DropDown>Nothing found!</DropDown>
                )}
              </DropDown>
            )}
          </div>
        )}
      </Downshift>
    </SearchStyles>
  );
};

export default AutoCOmplete;
