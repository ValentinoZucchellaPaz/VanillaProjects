

// ****** SELECT ITEMS **********

const alertP = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editId = '';


// ****** EVENT LISTENERS **********

// submit form
form.addEventListener("submit", addItem);
// clear button
clearBtn.addEventListener('click', clearItems);
// load items
window.addEventListener('DOMContentLoaded', setUpItems)


// ****** FUNCTIONS **********

// add items
function addItem (e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString(); //id unica de forma pajosa
    if (value && !editFlag){
        createListItem(id, value)

        // display alert
        displayAlert(`${value} added to the list`, 'success');
        // show container
        container.classList.add('show-container');
        // add to localStorage
        addToLS(id, value)
        // set back to default
        setBackToDefault()
    } else if (value && editFlag){ // in case editing
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        editLS(editId, value);
        setBackToDefault()
    } else { // in case no value in input
        displayAlert('please enter value', 'danger')
    }
}

// display alert
function displayAlert(text, action) {
    // action can be danger or success
    alertP.textContent = text;
    alertP.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(()=>{
        alertP.textContent = '';
        alertP.classList.remove(`alert-${action}`);
    }, 1000)
}

// set back to default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}

// clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
   if (items.length > 0) {list.innerHTML = ''};
    container.classList.remove('show-container')
    displayAlert('empty list', 'danger')
    setBackToDefault();
    localStorage.removeItem('list');
}

// delete item
function deleteItem (e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id
    list.removeChild(element)
    if (list.children.length === 0) {
        container.classList.remove('show-container')
    }
    displayAlert('item-removed', 'danger');
    setBackToDefault()
    // remove from localStorage
    removeFromLS(id)
}

// edit item
function editItem (e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit';
}


// ****** LOCAL STORAGE **********

function addToLS(id, value){
    const grocery = {id, value};
    let items = getLS();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items))
}

function removeFromLS (id) {
    let items = getLS();
    items = items.filter(item => item.id !== id)
    localStorage.setItem('list', JSON.stringify(items))
}

function editLS (id, value) {
    let items = getLS();
    items = items.map(item => {
        if (item.id === id) {
            item.value = value;
        }
        return item
    })
    localStorage.setItem('list', JSON.stringify(items))
}

function getLS() {
    return localStorage.getItem('list') 
    ? JSON.parse(localStorage.getItem('list'))
    :[];
}


// ****** SETUP ITEMS **********

function setUpItems() {
    let items = getLS();
    if(items.length > 0) {
        items.forEach(item => createListItem(item.id, item.value));
        container.classList.add('show-container')
    }
}

function createListItem (id, value) {
    const element = document.createElement('article');
        element.classList.add('grocery-item');
        element.setAttribute('data-id', id);
        element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
    
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        // append child
        list.appendChild(element);
}