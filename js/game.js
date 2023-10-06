const colors = ['#0000FF', '#000', '#FF0000', '#FFFF00', '#32CD32', '#8B008B', '#FF4500']
const circle = document.createElement('div')
const getRandomPosition = () => {
    let x = Math.floor(Math.random() * widthScreen) - 90
    let y = Math.floor(Math.random() * heightSreen) - 90
    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y
    return { x, y }  
}

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const dificult = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const level = urlParams.get('level')
    if(level === 'easy') {
        return 'circleEasy'
    } else if(level === 'medium') {
        return 'circleMedium'
    } else if(level === 'hard') {
        return 'circleHard'
    }
}

const updateCircle = () => {
    circle.className = dificult()
    const position = getRandomPosition();
    document.body.appendChild(circle)
    circle.style.backgroundColor = getRandomColor()
    circle.style.left = position.x + 'px'
    circle.style.top = position.y + 'px'
    circle.style.position = 'absolute'
    
}

updateCircle()


circle.addEventListener('click', () => {
    updateCircle()
});

