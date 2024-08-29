document.addEventListener("DOMContentLoaded", function() {
    var toggleButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
    toggleButtons.forEach(function(toggleButton) {
        var targetId = toggleButton.getAttribute('data-bs-target');
        var toggleIcon = toggleButton.querySelector('img');
        var targetElement = document.querySelector(targetId);

        toggleButton.addEventListener("click", function() {
            if (toggleButton.classList.contains('filter_btn_black')) {
                toggleButton.classList.remove('filter_btn_black');
                toggleButton.classList.add('filter_btn_orange');
                toggleIcon.src = "../assets/imgs/minus.png"; 
            } else {
                toggleButton.classList.remove('filter_btn_orange');
                toggleButton.classList.add('filter_btn_black');
                toggleIcon.src = "../assets/imgs/plus.png"; 
            }
        });
    });
});


/////////////////////////////////////////////////////////
document.getElementById('sidebarToggle').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('mainContent');
    
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('sidebar-open');
});
