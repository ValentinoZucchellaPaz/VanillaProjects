// const btns = document.querySelectorAll('.question-btn');
// console.log(btns);

// btns.forEach(btn=>{
//     btn.addEventListener('click', (e)=>{
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//     })
// })

// otra forma que permite otra funcion

const questions = document.querySelectorAll('.question');
questions.forEach(question=>{
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', ()=>{
        questions.forEach(item=>{
            if (item !== question) {
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})