import { observable, action } from 'mobx';

export type TMessage = {
  text: string;
  author: string;
};

export class ChatStrore {
  @observable
  messages: TMessage[] = [];

  @action
  addMessage(message: TMessage) {
    this.messages.push(message);
  }
}
