'use strict';

// app.js
import Shape from './shape.js';

const shapesArray = [];
const maxShapes = 36;
let infoParagraph;

function createShape() {
    if (shapesArray.length >= maxShapes) {
        alert('Storage is full. You cannot add more shapes.');
        return;
    }

    const shapeSelect = document.getElementById('shapeSelect');
    const colorSelect = document.getElementById('colorSelect');
    const shapeContainer = document.getElementById('shapeContainer');
    const messageContainer = document.getElementById('messageContainer');

    const selectedShape = shapeSelect.value;
    const selectedColor = colorSelect.value;

    const shape = new Shape(selectedShape, selectedColor);

    shapesArray.push(shape);

    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${selectedShape}`;
    shapeDiv.style.backgroundColor = selectedColor;
    shapeDiv.style.width = '36px';
    shapeDiv.style.height = '36px';

    if (selectedShape === 'square') {
        shapeDiv.style.borderRadius = '5px';
    }

    shapeDiv.addEventListener('click', () => displayShapeInfo(shape));

    shapeContainer.insertBefore(shapeDiv, shapeContainer.firstChild);
}

const colorOptions = document.getElementById('colorSelect');
const colors = {
    blue: '#09f',
    green: '#9f0',
    orange: '#f90',
    pink: '#f09',
    purple: '#90f',
};

for (const key in colors) {
    if (colors.hasOwnProperty(key)) {
        const option = document.createElement('option');
        option.value = colors[key];
        option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        colorOptions.appendChild(option);
    }
}

function displayShapeInfo(shape) {
    const messageContainer = document.getElementById('messageContainer');

    if (infoParagraph) {
        infoParagraph.remove();
        infoParagraph = null;
    }

    infoParagraph = createInfoParagraph(shape);
    messageContainer.appendChild(infoParagraph);
}

function createInfoParagraph(shape) {
    const colorName = getColorName(shape.colour);
    const newInfoParagraph = document.createElement('p');
    newInfoParagraph.textContent = `Unit ${shapesArray.length - shapesArray.indexOf(shape)}: ${shape.name} ${colorName}`;
    return newInfoParagraph;
}

function getColorName(hexColor) {
    const colorMap = {
        '#09f': 'blue',
        '#9f0': 'green',
        '#f90': 'orange',
        '#f09': 'pink',
        '#90f': 'purple',
    };

    return colorMap[hexColor] || hexColor;
}

document.getElementById('createButton').addEventListener('click', createShape);
