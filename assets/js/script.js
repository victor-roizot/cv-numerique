let navLinks = document.getElementById('navLinks');

function openMenu(){
    navLinks.style.right ='0px';
}

function closeMenu(){
    navLinks.style.right ='-200px';
}

AOS.init()