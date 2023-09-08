const startGame = () => {
    easy.addEventListener('click', () => {
       createsCircles = 1500
       window.location.href = 'app.html?' + 'easy'
    })
 
    medium.addEventListener('click', () => {
       createsCircles = 1000
       window.location.href = 'app.html?' + 'medium'
    })
 
    hard.addEventListener('click', () => {
       createsCircles = 750
       window.location.href = 'app.html?' + 'hard'
    })
 }
 
 startGame()