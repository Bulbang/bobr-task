let aside = document.getElementsByTagName("aside")[0];
let navContent1 = document.querySelector(".nav-header");
let navContent2 = document.querySelector(".nav-body");
let navOverlay = document.querySelector(".nav-overlay");
let navToggle = document.querySelector(".toggle");
const navExit = document.querySelector(".exit");
const ANIM_SPEED = 500;
let openBool = false;

function close() {
  if (!openBool) {
    navContent1.classList.add("hidden");
    navContent2.classList.add("hidden");
    setTimeout(() => {
      aside.classList.remove("open");
      aside.classList.add("hide");
    }, ANIM_SPEED);
    setTimeout(() => {
      aside.classList.remove("hide");
      navToggle.classList.remove('rotate')
    }, ANIM_SPEED * 2);
  }
}

function open() {
  openBool = true;
  aside.classList.add("open");
  navToggle.classList.add('rotate')
  setTimeout(() => {
    navContent1.classList.remove("hidden");
    navContent2.classList.remove("hidden");
    openBool = false;
  }, ANIM_SPEED);
}
navToggle.addEventListener("click", () => {
  open();
});

navExit.addEventListener("click", () => {
  close();
});

navOverlay.addEventListener("click", () => {
  close();
});
