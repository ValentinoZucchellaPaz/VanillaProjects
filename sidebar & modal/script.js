const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('show-sidebar');
    toggleBtn.classList.toggle('bounce-animation')
    document.body.classList.toggle('gray-background')
})
closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('show-sidebar')
    toggleBtn.classList.remove('bounce-animation')
    document.body.classList.remove('gray-background')
})


// modal
const openModalBtn = document.querySelector('.modal-btn');
const closeModalBtn = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalContainer = document.querySelector('.modal-container')

openModalBtn.addEventListener('click', ()=>{
    modalOverlay.classList.add('open-modal');
    modalContainer.classList.add('slide-down')
})
closeModalBtn.addEventListener('click', ()=>{
    modalOverlay.classList.remove('open-modal')
    modalContainer.classList.remove('slide-down')
})