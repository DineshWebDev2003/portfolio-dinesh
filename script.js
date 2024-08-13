document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById ('hamburger');
    const navLinks = document.getElementById('nav-links');
    const closeIcon = document.getElementById('close-icon');

    // Show navigation menu
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
       
    });

    // Hide navigation menu
    navLinks.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });



    

    // Hide navigation menu when clicking outside of it (optional enhancement)
    document.addEventListener('click', function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});

//EE95DE57BE6A7927238F9CF60311A2F65972