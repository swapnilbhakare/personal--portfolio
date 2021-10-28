// preloader 
const preloader = document.querySelector(".preloader");
window.addEventListener('load',()=>{
    setTimeout(()=>{
        preloader.classList.add('hide-preloader')
    },2000)
})
// slide images animation
let slideIndex =1;
showSlides(slideIndex)
function plusSlides(n) {
    showSlides((slideIndex+=n))
}
setInterval(function() {
    plusSlides(1)
},3 * 1000)


function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('img')
    if(n> slides.length){
        slideIndex =1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    for(i=0;i<slides.length; i++){
        slides[i].style.display='none';
    }
    slides[slideIndex - 1 ].style.display='flex'
}

// skills 

const bars = document.querySelectorAll(".progress__bar");
bars.forEach(function (bar) {
  let percentage = bar.dataset.percent;
  let tooltip = bar.children[0];
  tooltip.innterText = percentage + "%";
  bar.style.width = percentage + "%";
 
});