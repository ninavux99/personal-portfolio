window.addEventListener ("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    document.querySelector ('body').style.background
    }
    else {
    document.querySelector ('body').style.background
    } 

    const header = document.querySelector('header');
    if (window.scrollY>0){
        header.classList.add('scrolled');
    }else {
        header.classList.remove('scrolled');
    }
})

   
