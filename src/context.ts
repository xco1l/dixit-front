import {
  TableStrore,
  ChatStrore,
  HandStrore,
  UsersStrore,
  GameStore,
} from 'store';
import { createContext, useContext } from 'react';

const storesContext = createContext({
  usersStore: new UsersStrore(),
  chatStore: new ChatStrore(),
  tableStore: new TableStrore(),
  handStore: new HandStrore(),
  gameStore: new GameStore(),
});

export const useStores = () => useContext(storesContext);
