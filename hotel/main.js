document.addEventListener('DOMContentLoaded', function() {
    const navContainers = document.querySelectorAll('.nav-container');

    navContainers.forEach(function(navContainer) {
        navContainer.addEventListener('click', function() {
            // Remove 'selected' class from all nav containers
            navContainers.forEach(function(container) {
                container.classList.remove('selected');
            });

            // Add 'selected' class to clicked nav container
            navContainer.classList.add('selected');
        });
    });
});