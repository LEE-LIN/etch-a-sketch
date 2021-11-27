function createPixel(numPix) {
    for (pix = 0; pix < numPix**2; pix++) {
        let div = document.createElement('div');
        div.className = 'pix';
        container.appendChild(div);
    }
}

function arrangePix(numPix) {
    container.style.gridTemplateColumns = `repeat(${numPix}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numPix}, 1fr)`;
}

function drawPix(pixels, color) {
    pixels.forEach(item => {
        item.addEventListener('mouseenter', event => {
            event.target.style.backgroundColor = color;
        });
    });
}

function clearPix() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function sketchPad() {
    let numPix = prompt('Number of pixels per side: ', 16);    
    while (numPix > 100) {
        numPix = prompt('Pixel number should not exceed 100,\nReenter number of pixels per side: ', 16);
    }
    createPixel(numPix);
    arrangePix(numPix);
    const pixels = document.querySelectorAll('.pix');
    drawPix(pixels, 'black');    
}

const btn = document.querySelector('#clear');
btn.addEventListener('click', e => {
    clearPix();
    sketchPad();
});

const container = document.querySelector('#sketchpad');
sketchPad()