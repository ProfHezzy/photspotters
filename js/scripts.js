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


document.addEventListener('DOMContentLoaded', function() {
    const page1 = document.getElementById('testimonial-page-1');
    const page2 = document.getElementById('testimonial-page-2');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentPage = 1;

    function showPage(pageNumber) {
        if (pageNumber === 1) {
            page1.style.display = 'block';
            page2.style.display = 'none';
        } else if (pageNumber === 2) {
            page1.style.display = 'none';
            page2.style.display = 'block';
        }
        currentPage = pageNumber;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < 2) {
            showPage(currentPage + 1);
        }
    });
});
