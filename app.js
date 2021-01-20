// Movement animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');
const image = document.querySelector('.sneakerImage');
const floatingButtons = document.querySelector('.float-button');
const panel = document.querySelector('.sizes');
const sizeButtons = document.querySelectorAll('.size-button')
const text = document.querySelector('.text');
container.addEventListener('mousemove',(e) =>{
    let xAxis = (window.innerWidth / 2) - e.pageX/25;
    let yAxis = (window.innerHeight / 2) - e.pageY/25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) `;
});


container.addEventListener('mouseenter',(e) =>{
    //card.style.transition = "none";
    image.style.transform = "translateZ(100px)";
    floatingButtons.style.transform = "translateZ(100px)";
    panel.style.transform = "translateZ(100px)";
    floatingButtons.style.color="black";
    floatingButtons.style.background="white";

    sizeButtons.forEach((sizeB) =>{
        sizeB.style.transform="translateY(-150px)";
    });
    text.style.color="black";
});

container.addEventListener('mouseleave',(e) =>{
    //card.style.transition = "all 1s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg) `;
    image.style.transform = "translateZ(0px)";
    floatingButtons.style.transform = "translateZ(0px)";
    floatingButtons.style.color="white";
    floatingButtons.style.background="#f54642";
    panel.style.transform = "translateZ(0px)";
    sizeButtons.forEach((sizeB) =>{
        sizeB.style.transform="translateY(0px)";
    });
    text.style.color="white";
});