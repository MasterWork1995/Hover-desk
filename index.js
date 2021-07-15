const board = document.querySelector('#board');
const colors = ['#f53333', '#e831c9', '#31dce8', '#e8b431', '#070ff5', '#51e84f', '#d8f70f'];
const SQUARES_NUMBER = 1480;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
};

const setColor = (element) => {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (element) => {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000000`
}

const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
}