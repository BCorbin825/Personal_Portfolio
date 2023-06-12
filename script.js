
/* ------------------------------ Constants ------------------------------ */
const nav_elements = document.querySelectorAll('.active-section li');
const top_bar = document.getElementById("top-bar");

// const menu_open = document.getElementById("menu-btn");
// const menu_close = document.getElementById("menu-close-btn");
// const dropdown_menu = document.querySelector('.dropdown-menu');


/* ---------------------------- Dynamic code ---------------------------- */
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// Handles highlighting the current section
window.addEventListener('scroll', () => {
    // Get the current scroll position and viewport height
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Find the section that is currently taking up the most of the viewport
    var maxVisibleArea = 0;
    var activeSectionId = '';

    // Iterate over each section
    document.querySelectorAll('section').forEach(section => {
        // Get the offset top, height, and visible area of the section
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const visibleArea = Math.min(scrollPosition + viewportHeight, sectionTop + sectionHeight) - 
                            Math.max(scrollPosition, sectionTop);

        // Update the active section if the current section has more visible area
        if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSectionId = section.getAttribute('id');
        }
    });

    // Find the corresponding navigation element and add the highlight class
    const activeNavElement = document.querySelector(`.active-section li a[href="#${activeSectionId}"]`);
    if (activeNavElement) {
        nav_elements.forEach(element => {
        element.querySelector('a').classList.remove('highlight');
        });
        activeNavElement.classList.add('highlight');
    }
});

// Handles menu open button clicks
// menu_open.addEventListener("click", function() { 
//   dropdown_menu.classList.remove('hidden');
//   menu_open.classList.add("hidden");
//   menu_close.classList.remove("hidden");
// });

// Handles menu close button clicks
// menu_close.addEventListener("click", function() { 
//   dropdown_menu.classList.add('hidden');
//   menu_open.classList.remove("hidden");
//   menu_close.classList.add("hidden");
// });

/* --------------------------- Functions --------------------------- */
