import { useState, useEffect } from 'react';
import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import Button from './styles/Button';

const possiblePermission = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE',
];

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

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation updatePermissions($permissions: [Permission], $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;

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
                {possiblePermission.map((perm, i) => (
                  <th key={i}>{perm}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((user, i) => (
                <User key={i} user={user} />
              ))}
            </tbody>
          </Table>
        </>
      )
    }
  </Query>
);

const User = ({ user }) => {
  const { name, email, id, permissions: perm } = user;
  const [permissions, setPermissions] = useState(perm);

  const handlePermission = e => {
    const checkbox = e.target;
    let updatedPermissions = [...permissions];
    if (checkbox.checked) {
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        perm => perm !== checkbox.value,
      );
    }
    setPermissions(updatedPermissions);
    console.log(updatedPermissions);
  };

  return (
    <Mutation
      mutation={UPDATE_PERMISSIONS_MUTATION}
      variables={{
        permissions,
        userId: id,
      }}
    >
      {(updatePermissions, { loading, error }) => (
        <>
          {error && (
            <tr>
              <td colSpan="8">
                <Error error={error} />
              </td>
            </tr>
          )}

          <tr>
            <td>{name}</td>
            <td>{email}</td>
            {possiblePermission.map((perm, i) => (
              <td key={i}>
                <label htmlFor={`${id}-permission-${perm}`} />
                <input
                  type="checkbox"
                  checked={permissions.includes(perm)}
                  onChange={handlePermission}
                  value={perm}
                  id={`${id}-permission-${perm}`}
                />
              </td>
            ))}
            <td>
              <Button
                disabled={loading}
                type="button"
                onClick={updatePermissions}
              >
                Updat{loading ? 'ing' : 'e'}
              </Button>
            </td>
          </tr>
        </>
      )}
    </Mutation>
  );
};

export default Permissions;
