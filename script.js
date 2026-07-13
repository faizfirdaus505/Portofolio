// tonggel

const menuTonggle = document.querySelector('.menu-tonggle input');
const nav = document.querySelector('nav ul');

menuTonggle.addEventListener('click', function() {
    nav.classList.toggle('slide')
});

// slider

let images = document.querySelectorAll('.image');
let classes = ['previous4', 'previous3', 'previous2', 'previous', 'active', 'next', 'next2', 'next3', 'next4'];

//update slider
function updateSlider(direction) {
if(direction === 'next'){
    classes.unshift(classes.pop())
}else if(direction === 'prev'){
    classes.push(classes.shift())
}
images.forEach((img, i)=>{
    img.className = "image " + classes[i]
})
}

//slider on click
images.forEach((el)=>{
el.addEventListener('click', ()=>{
    if(el.classList.contains('previous4') || el.classList.contains('previous3') ||el.classList.contains('previous2') ||el.classList.contains('previous')){
        updateSlider('prev')
    }else if(el.classList.contains('next4') ||el.classList.contains('next3') ||el.classList.contains('next2') ||el.classList.contains('next')){
        updateSlider('next')
    }
})
})