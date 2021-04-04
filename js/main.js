const submitTodo = document.querySelector('#submitTodo');
const addTodo = document.querySelector('#addTodo');
const errorOutput = document.querySelector('#output');
const todos = document.querySelector('#todos');
const filterTodo = document.querySelector('#search');
const allTodos = document.querySelectorAll('li');

const addTodoFunc = (e) => {
  e.preventDefault();
  if(addTodo === '' || addTodo.value.length < 5) {
    errorOutput.textContent = 'Please Enter A Minimum Of Three Characters';
    errorOutput.style.backgroundColor = 'red';
    errorOutput.style.color = 'white';
    errorOutput.style.padding = '2px 3px';
  } else {
    errorOutput.textContent = '';
    errorOutput.style.padding = '0';

    let delButton = document.createElement('button');
    delButton.className = 'delete';
    delButton.appendChild(document.createTextNode('x'));
  
    let newTodo = document.createElement('li');
    newTodo.appendChild(document.createTextNode(addTodo.value));
    newTodo.appendChild(delButton);
    todos.appendChild(newTodo);
  }
};

const delTodoFunc = (e) => {
  if(e.target.className === "delete") {
    if(confirm('Are You Sure You Want To Delete Todo?')) {
      todos.removeChild(e.target.parentElement);
    }
  }
}

const filterTodoFunc = (e) => {
  e.preventDefault();
  let searchValue = e.target.value.toLowerCase();
  allTodos.forEach(todo => {
    let currentTodo = todo.firstChild.textContent.toLowerCase();
    if(currentTodo.indexOf(searchValue) !== -1) {
      todo.style.display = 'block';
    } else {
      todo.style.display = 'none';
    }
  });
}

submitTodo.addEventListener('click', addTodoFunc);
todos.addEventListener('click', delTodoFunc);
filterTodo.addEventListener('keyup', filterTodoFunc);

//Change Background Color Function
const changeBg = document.querySelector('#changeBg');
const sectionB = document.querySelector('.section-b');
const reload = document.querySelector('#reload');

const changeBodyBg = (e) => {
  sectionB.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
}

const resetBodyBg = () => {
  sectionB.style.backgroundColor = '#f4f4f4';
}

reload.addEventListener('click', (e) => {
  e.preventDefault();
  location.reload();
})

changeBg.addEventListener('mousemove', changeBodyBg);
changeBg.addEventListener('mouseout', resetBodyBg);