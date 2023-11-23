'use strict';

import { fileURLToPath } from ".index.js";

export default class Shape {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  getInfo() {
    alert(`Shape: ${this.name}, Color: ${this.color}`);
  }
}

export { getFile, getname, getInfo as file}