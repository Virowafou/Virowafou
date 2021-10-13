let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Mettez votre pseaudo mais pas votre vrai nom.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('nom', myName);
    myHeading.innerHTML = 'Rebonjour, ' + myName;
  }
}

if(!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.innerHTML = 'Rebonjour, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}