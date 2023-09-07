const colors = ['#0000FF', '#000', '#FF0000', '#FFFF00', '#32CD32']
const circle = document.querySelector('.circle')

const getRandomPosition = () => {
    const x = Math.floor(Math.random() * widthScreen) - 90
    const y = Math.floor(Math.random() * heightSreen) - 90
    return x, y
}

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const updateCircle = () => {
    const position = getRandomPosition();
    circle.style.left = position.x + 'px';
    circle.style.top = position.y + 'px';
    circle.style.backgroundColor = getRandomColor();
}

circle.addEventListener('click', () => {
    updateCircle();
});

updateCircle();






