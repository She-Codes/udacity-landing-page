/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

/************************************************************** */

// grab sections
const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");
const windowPercentage = 0.4;
const lowerActiveBoundaryNumber = window.innerHeight * windowPercentage;
const upperActiveBoundaryNumber = -100;

const listString = Array.from(sections, section => {
  return `<li><a id="menu__link-${section.id}" class="menu__link" href="#" data-section="${section.id}">${section.dataset.nav}</a></li>`;
}).join("");

navbarList.innerHTML = listString;

// when are sections in viewport? add active
document.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionTopIsWithinTargetArea =
      sectionTop < lowerActiveBoundaryNumber &&
      sectionTop > upperActiveBoundaryNumber;
    const link = document.getElementById(`menu__link-${section.id}`);

    // less than means above
    if (sectionTopIsWithinTargetArea) {
      section.classList.add("active");
      link.classList.add("active");
    } else {
      section.classList.remove("active");
      link.classList.remove("active");
    }
  });
});
// scroll to section when anchor clicked
// click link
// get top of element and scrolling page until element is in position

navbarList.addEventListener("click", e => {
  e.preventDefault();
  const link = e.target.closest(".menu__link");

  if (link) {
    // TODO: need to visually see how scrollto works
    let section = document.getElementById(link.dataset.section);
    let sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    // console.log(sectionTop);
    // console.log("get bounding: " + section.getBoundingClientRect().top);
    // console.log("offset: " + window.pageYOffset);
    window.scrollTo(0, sectionTop);
  }
});
