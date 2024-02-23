//------For menu bar----------------

const open = document.getElementById('open');
const close = document.getElementById('close');
const menuBar = document.querySelector('.menu')

open.addEventListenner('click',() => {
    menuBar.style.display = 'block';
    open.style.display = 'none';
    close.style.display = "block";
});

close.addEventListenner('click',() => {
    menuBar.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
})

//........For arrow.............
const down = document.querySelector('.down');
const toggler = document.querySelectorAll('.rotator')

for(let i=0; i<toggler.length; i++){

    toggler[i].addEventListener('mouseover',()=>{
      down[i].style.transform = "rotate(180deg)";
    });

    toggler[i].addEventListener('mouseout',()=>{
        down[i].style.transform = "rotate(0deg)";
      });
}