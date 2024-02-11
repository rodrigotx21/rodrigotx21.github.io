function toggleClass() {
    // Get the HTML object and class name
    var targetElement = document.getElementById("nav_menu");
    var targetClass = "menu_active";

    // Check if the element already has the class
    var hasClass = targetElement.classList.contains(targetClass);

    // Toggle the class based on the current state
    if (hasClass) {
        targetElement.classList.remove(targetClass);
    } else {
        targetElement.classList.add(targetClass);
    }
}