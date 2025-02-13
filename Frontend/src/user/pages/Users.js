import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Sharanya',
      image:
        'https://picsum.photos/536/354',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
