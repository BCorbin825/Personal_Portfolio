
/* ------------------------------ Constants ------------------------------ */


/* ---------------------------- Dynamic code ---------------------------- */
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});


window.addEventListener('scroll', () => {
// Handles highlighting the current section
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
  
    let maxVisibleArea = 0;
    let activeSectionId = '';
  
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const visibleArea = Math.min(scrollPosition + viewportHeight, sectionTop + sectionHeight) - Math.max(scrollPosition, sectionTop);
  
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSectionId = section.getAttribute('id');
      }
    });
  
    document.querySelectorAll('.nav-link').forEach(element => {
      element.classList.remove('highlight');
    });
  
    const activeNavElement = document.querySelector(`a[href="#${activeSectionId}"]`);
    if (activeNavElement) {
      activeNavElement.classList.add('highlight');
    }
  });

/* --------------------------- Functions --------------------------- */
