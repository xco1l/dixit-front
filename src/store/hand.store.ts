import { observable, action } from 'mobx';

export class HandStrore {
  @observable
  cards: Map<string, any> = new Map();

  @action
  addCard(card: any) {
    this.cards.set(card._id, card);
  }

  @action
  removeCard(card: any) {
    this.cards.delete(card.id);
  }
}
