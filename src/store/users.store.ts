import { observable, action } from 'mobx';
import { RANK } from 'enums/rank.enum';

export type TUser = {
  name: string;
  avatar: string;
  _id: string;
  rank: RANK;
  score: number;
};

export class UsersStrore {
  @observable
  users: Map<string, TUser> = new Map();

  @observable
  me!: TUser;

  @action
  addUser(user: TUser) {
    this.users.set(user._id, user);
  }

  @action
  delUser(user: TUser) {
    this.users.delete(user._id);
  }
}
