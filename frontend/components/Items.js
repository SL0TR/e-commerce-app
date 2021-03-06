import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import Pagination from './Pagination';
import { perPage } from '../config';
import Spinner from './Spinner';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first:  Int = ${perPage}) {
    items(first: $first,skip: $skip) {
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

const Items = props => (
  <Center>
    <h2 className="fancy-title">Shop Products</h2>
    <Pagination page={props.page} />
    <Query
      query={ALL_ITEMS_QUERY}
      fetchPolicy="network-only"
      variables={{
        skip: props.page * perPage - perPage,
      }}
    >
      {({ data, error, loading }) => {
        if (loading) return <Spinner />;
        if (error) return <p>Error! : {error.message} </p>;
        return (
          <ItemsList>
            {data.items.map(item => {
              return <Item item={item} key={item.id} />;
            })}
          </ItemsList>
        );
      }}
    </Query>
    <Pagination page={props.page} />
  </Center>
);

export { ALL_ITEMS_QUERY };
export default Items;
