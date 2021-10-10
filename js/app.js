const preloader = document.querySelector(".preloader");
window.addEventListener('load',()=>{
    setTimeout(()=>{
        preloader.classList.add('hide-preloader')
    },2000)
})