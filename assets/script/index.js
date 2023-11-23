'use strict';

import { Shape } from '.shape.js';
import Shape, { constructor, Shape, getname} from '.shape.js'
import { appendFile } from 'fs'

function createShape() {
  const shapeSelect = document.getElementById("shapeSelect");
  const colorSelect = document.getElementById("colorSelect");
  const shapeContainer = document.getElementById("shape-container");

  const selectedShape = shapeSelect.value;
  const selectedColor = colorSelect.value;

  const newShape = new Shape(selectedShape, selectedColor);

  const shapeDiv = document.createElement("div");
  shapeDiv.classList.add("shape", selectedShape);
  shapeDiv.style.backgroundColor = newShape.color;
  shapeDiv.onclick = () => newShape.getInfo();

  shapeContainer.appendChild(shapeDiv);
  
  // Check if the grid is full, and if so, reset it
  if (shapeContainer.childElementCount === 30) {
    shapeContainer.innerHTML = '';
  }
}

appendFile('log.txt', record, 'utf8', err => {
  if (err) throw err;
});