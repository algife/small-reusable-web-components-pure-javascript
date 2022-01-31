const sidenavClassName = "sidenav";
const menuIconClassName = "menu-icon";
const overlayClassname = "backdrop-overlay";

const getSideNavElem = () => document.querySelector(`.${sidenavClassName}`);
const getMenuIconElem = () => document.querySelector(`.${menuIconClassName}`);
const getOverlayElem = () => document.querySelector(`.${overlayClassname}`);

const toggleSideNav = () => {
  try {
    document.body.classList.toggle("sidenav-open");
  } catch (err) {
    console.error(err);
  }
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
