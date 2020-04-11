import React from 'react';
import './UsersContainer.scss';
import { User } from 'components';

export const UsersContainer = () => {
  const users: React.FunctionComponentElement<typeof User>[] = [];

  for (let i = 0; i < 12; i++)
    users.push(
      <User
        avatar="https://source.unsplash.com/600x600/?face"
        name="Ascar"
        score={i}
      />,
    );

  return (
    <div className="user-container">
      {users.map(user => {
        return <div className="user-container__user">{user}</div>;
      })}
    </div>
  );
};
