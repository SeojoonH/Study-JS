const myNumberTag = document.querySelector('#myNumber');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function() {
  myNumber--;
  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function() {
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName('color-btn');

for (let btn of colorBtns) {
  btn.onclick = function() {
    myNumberTag.style.color = btn.dataset.color;
  };
}