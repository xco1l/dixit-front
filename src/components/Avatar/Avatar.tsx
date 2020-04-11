import React from 'react';
import './Avatar.scss';

export const Avatar = ({ url }: { url: string }) => {
  return (
    <div
      className="avatar"
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></div>
  );
};
