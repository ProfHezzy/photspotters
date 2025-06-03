<script>
    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const getAppBtn = document.querySelector('.get-app-btn'); // Select the button

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Optionally, move the Get the App button into the mobile menu
            // Or hide it on mobile, which we've done in CSS
            if (navLinks.classList.contains('active')) {
                // Example: If you want to append the button to the nav-links div when active
                // navLinks.appendChild(getAppBtn.cloneNode(true)); // Clones the button
                // getAppBtn.style.display = 'none'; // Hide the original
            } else {
                // Logic to remove cloned button or show original if needed
            }
        });
    });
</script>