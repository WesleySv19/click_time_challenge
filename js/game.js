const colors = ['#0000FF', '#FF0000', '#FFFF00', '#32CD32', '#8B008B', '#FF4500', '#FFF', '#8B4513', '#FF69B4']
const circle = document.createElement('div')
let clicks = 0
const clickCount = document.querySelector('#result')

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

const clickSound = () => {
    const audio = new Audio('./audio/click.mp3')
    audio.play()
}

const dificult = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const level = urlParams.get('level')
    if (level === 'easy') {
        return 'circleEasy'
    } else if (level === 'medium') {
        return 'circleMedium'
    } else if (level === 'hard') {
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
    clicks += 1
    updateCircle()
    clickSound()
    clickCount.innerHTML = clicks
    
});
