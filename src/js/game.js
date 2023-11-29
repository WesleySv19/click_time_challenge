const colors = ['#0000FF', '#FF0000', '#FFFF00', '#32CD32', '#8B008B', '#FF4500', '#FFF', '#8B4513', '#FF69B4']
const circle = document.createElement('div')
const clickCount = document.querySelector('#result')
const timeLeftDiv = document.querySelector('.time')
const exitBtnDiv = document.querySelector('.exitBtn')
let clicks = 0
let timeUpdateCircle = 0

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
    const audio = new Audio('./public/audio/click.mp3')
    audio.play()
}

const clickSoundError = () => {
    const audio = new Audio('./public/audio/error.mp3')
    audio.play()
}

const dificult = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const level = urlParams.get('level')
    if (level === 'easy') {
        timeUpdateCircle = 2000
        return 'circleEasy'
        
    } else if (level === 'medium') {
        timeUpdateCircle = 1000
        return 'circleMedium'

    } else if (level === 'hard') {
        timeUpdateCircle = 900
        return 'circleHard'
    }
}

dificult()

setInterval(() => {
    updateCircle()
}, timeUpdateCircle)

const updateCircle = () => {
    const margin = 90 
    const position = getRandomPosition()

    const isCircleOverlapping = (x, y, element) => {
        const elementBounds = element.getBoundingClientRect()
        return (
            x + margin < elementBounds.right &&
            x - margin > elementBounds.left &&
            y + margin < elementBounds.bottom &&
            y - margin > elementBounds.top
        )
    }

    const isOverlappingTimeDiv = isCircleOverlapping(position.x, position.y, timeLeftDiv)
    const isOverlappingExitBtnDiv = isCircleOverlapping(position.x, position.y, exitBtnDiv)

    if (!isOverlappingTimeDiv && !isOverlappingExitBtnDiv) {
        circle.className = dificult()
        document.body.appendChild(circle)
        circle.style.backgroundColor = getRandomColor()
        circle.style.left = position.x + 'px'
        circle.style.top = position.y + 'px'
        circle.style.position = 'absolute'
    }
}


circle.addEventListener('click', (event) => {
    event.stopPropagation()

    const circleBounds = circle.getBoundingClientRect()
    const clickX = event.clientX
    const clickY = event.clientY

    if (
        clickX >= circleBounds.left &&
        clickX <= circleBounds.right &&
        clickY >= circleBounds.top &&
        clickY <= circleBounds.bottom
    ) {
        clicks += 1
        updateCircle()
        clickSound()
        clickCount.innerHTML = clicks
    }
})

document.body.addEventListener('click', () => {

    clickSoundError()
})
