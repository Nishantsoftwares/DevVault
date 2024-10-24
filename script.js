function addText() {
    const canvas = document.getElementById('canvas');
    const textElement = document.createElement('div');
    textElement.className = 'text';
    textElement.contentEditable = true;
    textElement.innerText = 'Double-click to edit';
    textElement.style.left = '50px';
    textElement.style.top = '50px';
    canvas.appendChild(textElement);
}

function addShape() {
    const canvas = document.getElementById('canvas');
    const shapeElement = document.createElement('div');
    shapeElement.className = 'shape';
    shapeElement.style.width = '100px';
    shapeElement.style.height = '100px';
    shapeElement.style.backgroundColor = 'blue';
    shapeElement.style.left = '100px';
    shapeElement.style.top = '100px';
    canvas.appendChild(shapeElement);
}
