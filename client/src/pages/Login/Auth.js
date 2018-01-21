import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const user = ({ id, username }) => (
  <h1 key={id} >{username}</h1>
);

const Auth = ({ data: { allUsers = [] } }) => (
  <div>
    {allUsers.map(user)}
  </div>
);

const query = gql`
{
  allUsers {
    id
    username
  }
}
`;

export default graphql(query)(Auth);