'use strict';

export default class Shape {
  constructor(name, colour) {
      this._name = name;
      this._colour = colour;
  }

  get name() {
      return this._name;
  }

  get colour() {
      return this._colour;
  }

  getInfo() {
      return `Name: ${this._name}, Colour: ${this._colour}`;
  }
}