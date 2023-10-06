const startGame = () => {
    easy.addEventListener('click', () => {
       window.location.href = 'app.html?level=easy'
    })
 
    medium.addEventListener('click', () => {
       window.location.href = 'app.html?level=medium'
    })
 
    hard.addEventListener('click', () => {
       window.location.href = 'app.html?level=hard'
    })
 }
 
 startGame()