import React from 'react';
import { UsersContainer, Hand, Table, ControlPanel, Chat } from 'components';
import './Main.scss';

export const Main = () => {
  return (
    <div className="main">
      <div className="main__users">
        <UsersContainer />
      </div>
      <Hand />
      <Table />
      <ControlPanel />
      <div className="main__chat">
        <Chat />
      </div>
    </div>
  );
};
