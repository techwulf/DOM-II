// Your code goes here
const mouseover = document.querySelector('header.intro img');
mouseover.addEventListener(
  'mouseover', event => event.target.style.filter = 'grayscale(1.0)'
);

const keydown = document.querySelector('body');
keydown.addEventListener(
  'keydown', event => {
    mouseover.style.filter = 'grayscale(0)';
    mouseover.style.display = 'block';
  }
);

const wheel = document.querySelector('body');
wheel.addEventListener(
  'wheel', event => mouseover.style.display = 'none'
);

const load = document.createElement('input');
window.addEventListener('load',event => {
  document.querySelector('.intro').appendChild(load)

  const focus = document.querySelector('input');
  focus.addEventListener(
    'focus', event => event.target.style.background = 'orange'
  )
});

const resize = document.querySelector('.logo-heading');
window.addEventListener('resize', event => resize.textContent = "AHHHHHH");

const scroll = document.querySelector('.nav-link');
window.addEventListener('scroll', event => scroll.style.color = 'green');

const select = document.querySelector('.intro h2');
window.addEventListener('select', event => 
  select.textContent = 'You would copy and paste!'
);

const dblclick = document.querySelector('.intro h2');
dblclick.addEventListener(
  'dblclick', event => event.target.textContent = 'You would click me like that!'
);

const dragAndDrop = document.querySelector('.nav-link');
dragAndDrop.addEventListener(
  'mousedown', event => {
    dragAndDrop.style.position = 'absolute';
    dragAndDrop.style.zIndex = 1000;
    dragAndDrop.style.fontSize = '1.6rem';
    dragAndDrop.style.color = 'green';
    dragAndDrop.style.textDecoration = 'none';
    document.body.append(dragAndDrop);
    moveAt(event.pageX, event.PageY);
    function moveAt(pageX, pageY){
      dragAndDrop.style.left = pageX - dragAndDrop.offsetWidth  / 2 + 'px';
      dragAndDrop.style.top  = pageY - dragAndDrop.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event){
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    dragAndDrop.addEventListener('mouseup',() => {
      document.removeEventListener('mousemove', onMouseMove);
      dragAndDrop.onmouseup = null;
    });
  } 
)