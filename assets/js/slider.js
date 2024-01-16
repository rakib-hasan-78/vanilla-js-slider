
let sliders = document.querySelectorAll(`.sliders`);
let index = 0;
let next = document.getElementById(`next`);
let previous = document.getElementById(`previous`);

next.addEventListener('click', ()=>{
    sliders[index].classList.remove('active');
    index = (index+1) % sliders.length;
    sliders[index].classList.add('active');
    console.log(`clicked`)
});

previous.addEventListener('click', ()=>{
    sliders[index].classList.remove('active');
    index = (index-1 + sliders.length) % sliders.length;
    sliders[index].classList.add('active'); 
});

setInterval(()=>{
    sliders[index].classList.remove('active');
    index = (index+1) % sliders.length;
    sliders[index].classList.add('active');
},5000);
