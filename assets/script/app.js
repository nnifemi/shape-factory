'use strict';

import Shape from './shape.js';

const shapesArray = [];
const maxRows = 4;
const maxColumns = 6;
let infoParagraph;

function createShape() {
    const shapeSelect = document.getElementById('shapeSelect');
    const colorSelect = document.getElementById('colorSelect');
    const shapeContainer = document.getElementById('shapeContainer');
    const messageContainer = document.getElementById('messageContainer');
    const shapeBackground = document.querySelector('.shape-bg');
    const messagesBelowContainer = document.getElementById('messagesBelowContainer');
    const selectContainer = document.querySelector('.select-container');

    const selectedShape = shapeSelect.value;
    const selectedColor = colorSelect.value;

    if (!selectedShape || !selectedColor) {
        messageContainer.innerHTML = '<p>Please select both shape and color.</p>';
        return;
    }

    messageContainer.innerHTML = '';

    if (shapesArray.length >= maxRows * maxColumns) {
        messageContainer.innerHTML = '<p>The maximum number of shapes has been reached. You cannot add more shapes.</p>';
        return;
    }

    const shape = new Shape(selectedShape, selectedColor);

    shapesArray.push(shape);

    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${selectedShape}`;
    shapeDiv.style.backgroundColor = selectedColor;
    shapeDiv.style.width = '45px';
    shapeDiv.style.height = '45px';

    if (selectedShape === 'square') {
        shapeDiv.style.borderRadius = '5px';
    }

    shapeDiv.addEventListener('click', () => displayShapeInfo(shape));

    shapeContainer.appendChild(shapeDiv);

    if (shapesArray.length === maxRows * maxColumns) {
        document.getElementById('createButton').disabled = true;
        messageContainer.innerHTML = '<p>The maximum number of shapes has been reached. You cannot add more shapes.</p>';
    }

    shapeBackground.style.display = 'block';

    // Display message below the shape container
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `Unit ${shapesArray.length - shapesArray.indexOf(shape)}: ${shape.name} ${getColorName(shape.colour)}`;
    messagesBelowContainer.appendChild(messageDiv);

    // Set the position of the select container to fixed
    selectContainer.style.position = 'fixed';
    selectContainer.style.top = '30vh'; // Adjust as needed
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
