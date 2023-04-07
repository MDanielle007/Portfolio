let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 100) {
        header.classList.add("shadow"); // add the 'shadow' class
    } else {
        header.classList.remove("shadow"); // remove the 'shadow' class
    }
});

const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open');
};
