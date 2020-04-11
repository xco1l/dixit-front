import React, { useEffect } from 'react';
import { UsersContainer as UCComponent } from 'components';
import { useStores } from 'context';
import { usersActions } from 'actions';
import { TUser } from 'store';

export const UsersContainer = (props: Parameters<typeof UCComponent>) => {
  const { usersStore } = useStores();

  const getMe = async () => {
    const me: TUser = (await usersActions.me()).data;
    usersStore.me = me;
  };

  useEffect(() => {
    getMe();
  });
};
