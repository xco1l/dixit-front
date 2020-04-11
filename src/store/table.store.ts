import { observable, action } from 'mobx';

export class TableStrore {
  @observable
  cards: any[] = [];

  @observable
  areCardsVisible: boolean = false;

  @action
  addCard(card: any) {
    this.cards.push(card);
  }

  @action
  dropCards() {
    this.cards = [];
  }

  @action
  showCards() {
    this.areCardsVisible = true;
  }

  @action
  hideCards() {
    this.areCardsVisible = false;
  }
}
