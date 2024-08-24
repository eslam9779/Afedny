document.addEventListener('DOMContentLoaded', function() {
    var firstNavLink = document.querySelector('.navbar-nav .nav-link');
    if (firstNavLink) {
        setActive(firstNavLink);
    }
});

function setActive(element) {
    
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add the active class to the clicked link
    element.classList.add('active');
}
