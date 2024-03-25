
/* ------------------------------ Constants ------------------------------ */


// /* ---------------------------- Dynamic code ---------------------------- */
// window.addEventListener('load', function() {
//     window.scrollTo(0, 0);
// });


window.addEventListener('scroll', highlightSectionNav);
window.addEventListener('load', highlightSectionNav);

document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.querySelector("form");

  // Add submit event listener to the form
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // If submission is successful, reset the form
        form.reset();
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here if needed
      });
  });
});

/* --------------------------- Functions --------------------------- */
function formatPhoneNumber(input) {
  // Remove any non-digit characters from the input value
  var phoneNumber = input.value.replace(/\D/g, '');

  // Remove leading "+1" if present
  phoneNumber = phoneNumber.replace(/^1/, '');

  // Apply formatting using a single regular expression
  phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

  // Set the formatted value back into the input, including the "+1" prefix
  input.value = phoneNumber;
}

// Handles highlighting the current section
function highlightSectionNav() {
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
}