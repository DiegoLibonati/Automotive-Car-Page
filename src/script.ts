const btnOpenNav = document.getElementById("btnOpen") as HTMLButtonElement;
const btnCloseNav = document.getElementById("btnClose") as HTMLButtonElement;
const navContainer = document.querySelector(
  ".header_container-nav"
) as HTMLElement;

btnOpenNav.addEventListener("click", () => {
  navContainer.classList.add("show-nav");
  btnOpenNav.classList.add("noshow-btn");
  btnCloseNav.style.display = "block";
});

btnCloseNav.addEventListener("click", () => {
  navContainer.classList.remove("show-nav");
  btnOpenNav.classList.remove("noshow-btn");
  btnCloseNav.style.display = "none";
});
