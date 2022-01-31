const sidenavClassName = "sidenav";
const menuIconClassName = "menu-icon";
const overlayClassname = "backdrop-overlay";

const getSideNavElem = () => document.querySelector(`.${sidenavClassName}`);
const getMenuIconElem = () => document.querySelector(`.${menuIconClassName}`);
const getOverlayElem = () => document.querySelector(`.${overlayClassname}`);

const toggleSideNav = () => {
  try {
    toggleSideNavVisibility();
    displaceMenuIconOnSideNavVisible(); // Once sidenav is shown, displace the menu button accordingly
  } catch (err) {
    console.error(err);
  }
};

const displaceMenuIconOnSideNavVisible = () => {
  const sideNavDisplayed = !getSideNavElem().classList.contains("hidden");
  getMenuIconElem().style.marginRight = sideNavDisplayed
    ? `${getSideNavElem().clientWidth}px`
    : 0;
};

const toggleSideNavVisibility = () => {
  getSideNavElem().classList.toggle("hidden");
  getOverlayElem().classList.toggle("hidden");
};

let isSideNavIsVisible = () => !getSideNavElem().classList.contains("hidden");

const onBackDropClicked = (event) => {
  const isBackdropBeingClicked =
    isSideNavIsVisible() && event.target.className === "backdrop-overlay";

  // event.path.every(
  //   (elem) =>
  //     elem.className !== sidenavClassname &&
  //     // MenuIcon is an exception
  //     elem.className !== menuIconClassName
  // );

  // console.log("click done in the backdrop", isBackdropBeingClicked);
  if (isBackdropBeingClicked) {
    toggleSideNav();
    // if (e.target.id !== "mySidebar" && e.target.id !== "btn_frontpage_menu") {
    //   if (e.target.offsetParent && e.target.offsetParent.id !== "mySidebar")
    //     closeNav();
    // }
  }
};

document.addEventListener("click", (event) => onBackDropClicked(event));
