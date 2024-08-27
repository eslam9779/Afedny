document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.querySelector('[data-bs-toggle="collapse"]');
    var toggleIcon = document.getElementById("toggleIcon");

    toggleButton.addEventListener("shown.bs.collapse", function() {
        toggleIcon.src = "../assets/imgs/expanicon.png"; // Change to the minus image
        console.log("expanded");
    });

    toggleButton.addEventListener("hidden.bs.collapse", function() {
        toggleIcon.src = "../assets/imgs/expandicon.png"; // Change back to the plus image
        console.log("collapsed");
    });
});
