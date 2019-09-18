const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];
let element = document.querySelector('.fruits');
element.removeChild(document.querySelector('.text'));
element.appendChild(document.createElement('ol')).className = 'fruit-list';
element = document.querySelector('.fruit-list');
element.style.margin = 'auto';
element.style.backgroundColor = '#354b4d';
element.style.width = '150px';
element.style.color = '#ffd700';
fruits.forEach((fruit) => {
  let li = document.createElement('li');
  li.innerHTML = (fruit === 'Apple')?'Only Apple':fruit;
  li.className = 'fruit-li'
  element.appendChild(li);
});