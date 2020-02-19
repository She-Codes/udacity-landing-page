const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");
const windowPercentage = 0.4;
const lowerActiveBoundaryNumber = window.innerHeight * windowPercentage;
const upperActiveBoundaryNumber = -100;

const generateListItems = () => {
  return Array.from(sections, section => {
    return `<li><a id="menu__link-${section.id}" class="menu__link" href="#" data-section="${section.id}">${section.dataset.nav}</a></li>`;
  }).join("");
};

// dynamically create menu on page load
const renderMenu = () => {
  navbarList.innerHTML = generateListItems();
};

// scroll to section when link is clicked
const scrollToSection = link => {
  let section = document.getElementById(link.dataset.section);
  let sectionTop = section.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo(0, sectionTop);
};

// highlight each section on scroll
const highlightSections = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    // less than is above and greater than is below
    const sectionTopIsWithinTargetArea =
      sectionTop < lowerActiveBoundaryNumber &&
      sectionTop > upperActiveBoundaryNumber;
    const link = document.getElementById(`menu__link-${section.id}`);

    if (sectionTopIsWithinTargetArea) {
      section.classList.add("active");
      link.classList.add("active");
    } else {
      section.classList.remove("active");
      link.classList.remove("active");
    }
  });
};

const scrollHandler = e => {
  highlightSections();
};

const clickHandler = e => {
  e.preventDefault();
  const link = e.target.closest(".menu__link");

  if (link) {
    scrollToSection(link);
  }
};

const setupEventListeners = () => {
  navbarList.addEventListener("click", clickHandler);
  document.addEventListener("scroll", scrollHandler);
};

const init = () => {
  renderMenu();
  setupEventListeners();
};

init();
