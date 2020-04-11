import { observable, action } from 'mobx';

export class GameStore {
  @observable
  status: TGameStatus = 'ready';

  @observable
  winner: string = '';

  @action
  start() {
    this.status = 'started';
  }

  @action
  pause() {
    this.status = 'paused';
  }

  @action
  end(winner: string) {
    this.winner = winner;
    this.status = 'ended';
  }

  @action
  restart() {
    this.winner = '';
    this.status = 'ready';
  }
}

export type TGameStatus = 'started' | 'paused' | 'ready' | 'ended';
