let prevScrollPos = window.pageYOffset;


window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.classList.add("shadow"); // add the 'shadow' class
    } else {
        header.classList.remove("shadow"); // remove the 'shadow' class
    }

    const currentScrollPos = window.pageYOffset;
    
    if (currentScrollPos < prevScrollPos || currentScrollPos === 0) {
        header.classList.remove('header-hide');
    } else {
        header.classList.add('header-hide');
    }
    
    prevScrollPos = currentScrollPos;
});