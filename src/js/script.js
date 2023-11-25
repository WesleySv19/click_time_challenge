const easy = document.querySelector('#easy')
const medium = document.querySelector('#medium')
const hard = document.querySelector('#hard')
const initBtn = document.querySelector('#init')
const stopwatch = document.querySelector('#stopwatch')

let heightSreen = 0
let widthScreen = 0
let count = 60
let createsCircles = null


const adjustScreenSize = () => {
   heightSreen = window.innerHeight
   widthScreen = window.innerWidth
}

addEventListener('resize', adjustScreenSize())



let time = setInterval(() => {
   stopwatch.innerHTML = count
   count -= 1
   if (count < 0) {
      clearInterval(time)
      document.querySelector('.resultPanel').style.display = 'block'
      circle.style.display = 'none'
   }
}, 1000)

