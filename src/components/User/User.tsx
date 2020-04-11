import React from 'react';
import './User.scss';
import { Avatar } from 'components';

export const User = ({
  name,
  score,
  avatar,
}: {
  name: string;
  score: number;
  avatar: string;
}) => {
  return (
    <div className="user">
      <div className="user__avatar">
        <Avatar url={avatar} />
      </div>
      <div className="user__info">
        <div className="user__name">{name}</div>
        <div className="user__score">Score: {score}</div>
      </div>
    </div>
  );
};
