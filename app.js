const barBtn=document.querySelector('#bar');
const closeBtn=document.getElementById('close');
const nav=document.querySelector('.navbar');


closeBtn.addEventListener('click',()=>{
    nav.classList.remove('active');
})

barBtn.addEventListener('click',()=>{
    // console.log('btn clicked')
    nav.classList.add('active')
    // nav.style.right="0px"


})

const mainImg=document.getElementById('main-img');
const smallImg=document.querySelectorAll('.small-img');
console.log(smallImg)
smallImg.forEach((img)=>{
    img.addEventListener('click',()=>{
        mainImg.src=img.src;
    })
})

