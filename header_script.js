function initializeNavbar() {
    const navbar = document.querySelector('.navbar');

    let lastScrollTop = 0;
    let scrollTimeout;

    // Convert desired vh value to pixels
    const vhToPx = (vh) => (vh * window.innerHeight) / 100;

    if (navbar) {
        console.log("Navbar element found and event listeners added.");

        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);

            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // User is scrolling down
                scrollTimeout = setTimeout(() => {
                    navbar.style.top = `-${navbar.offsetHeight}px`;
                }, 25); // Wait 25ms before hiding the header
            } else {
                // User is scrolling up
                navbar.style.top = '0';
            }
            lastScrollTop = scrollTop;
        });

        // Event listener to show the header when the user's cursor is near the top of the page
        document.addEventListener('mousemove', (event) => {
            if (event.clientY <= vhToPx(5)) { 
                navbar.style.top = '0';
            }
        });

        // Smooth scrolling for navbar links 
        document.querySelectorAll('.navbar-link').forEach(link => { 
            link.addEventListener('click', (event) => { 
                event.preventDefault(); 
                const targetId = link.getAttribute('href').substring(1); 
                const targetElement = document.getElementById(targetId); 
                if (targetElement) { 
                    targetElement.scrollIntoView({ behavior: 'smooth' }); 
                } 
            });
        });
    } else {
        console.error("Navbar element not found.");
    }
}

// Call the initialize function
initializeNavbar();
