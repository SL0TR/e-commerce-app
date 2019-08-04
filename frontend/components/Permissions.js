import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import Button from './styles/Button';

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const possiblePermission = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE',
];

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) =>
      console.log(data) || (
        <>
          <Error error={error} />
          <h2 className="fancy-title">Manage Users</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {possiblePermission.map(perm => (
                  <th>{perm}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map(user => (
                <User user={user} />
              ))}
            </tbody>
          </Table>
        </>
      )
    }
  </Query>
);

const User = ({ user }) => {
  const { name, email, id } = user;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      {possiblePermission.map(perm => (
        <td>
          <label htmlFor={`${id}-permission-${perm}`} />
          <input type="checkbox" />
        </td>
      ))}
      <td>
        <Button>Update</Button>
      </td>
    </tr>
  );
};

export default Permissions;
