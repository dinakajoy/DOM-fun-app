const submitHobby = document.querySelector('#submitHobby');
const addHobby = document.querySelector('#addHobby');
const errorOutput = document.querySelector('#output');
const hobbies = document.querySelector('#hobbies');
const filterHobby = document.querySelector('#search');
const allHobbies = document.querySelectorAll('li');

const addHobbyFunc = (e) => {
  e.preventDefault();
  if(addHobby === '' || addHobby.value.length < 5) {
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
  
    let newHobby = document.createElement('li');
    newHobby.appendChild(document.createTextNode(addHobby.value));
    newHobby.appendChild(delButton);
    hobbies.appendChild(newHobby);
  }
};

const delHobbyFunc = (e) => {
  if(e.target.className === "delete") {
    if(confirm('Are You Sure You Want To Delete Hobby?')) {
      hobbies.removeChild(e.target.parentElement);
    }
  }
}

const filterHobbyFunc = (e) => {
  let searchValue = e.target.value.toLowerCase();
  allHobbies.forEach(hobby => {
    let currentHobby = hobby.firstChild.textContent.toLowerCase();
    if(currentHobby.indexOf(searchValue) !== -1) {
      hobby.style.display = 'block';
    } else {
      hobby.style.display = 'none';
    }
  });
}

submitHobby.addEventListener('click', addHobbyFunc);
hobbies.addEventListener('click', delHobbyFunc);
filterHobby.addEventListener('keyup', filterHobbyFunc);

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

changeBg.addEventListener('mousemove', changeBodyBg);
changeBg.addEventListener('mouseout', resetBodyBg);
reload.addEventListener('click', (e) => {
  e.preventDefault();
  location.reload();
})