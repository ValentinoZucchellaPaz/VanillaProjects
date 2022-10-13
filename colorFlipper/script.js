const colors = ['rgb(133, 150, 200)', '#f105f2', '#05b5c2', 'salmon', 'crimson', '#b15172', '#0ae252'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
let previousColorNumber;

window.addEventListener('DOMContentLoaded', ()=> {
    previousColorNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[previousColorNumber];
    color.textContent = document.body.style.backgroundColor;
})

btn.addEventListener('click', ()=> {
    // get random num between 0-3
    const randomNumber = getRandomNumber(previousColorNumber);
    previousColorNumber = randomNumber;
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber (previousNumber) {

    let random = previousNumber;
    while (random == previousNumber){
        random = Math.floor(Math.random() * colors.length);
    }

    return random
}