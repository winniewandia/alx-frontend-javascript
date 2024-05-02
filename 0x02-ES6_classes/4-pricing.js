import Currency from './3-currency';

export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._Currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get Currency() {
    return this._Currency;
  }

  set Currency(newCurrency) {
    this._Currency = newCurrency;
  }

  displayFullPrice() {
    return this._amount + ' ' + this._Currency.displayFullCurrency();
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
