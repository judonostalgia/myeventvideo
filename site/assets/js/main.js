const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const dialog = document.querySelector("[data-dialog]");
const dialogTitle = document.querySelector("[data-dialog-title]");
const dialogVideo = document.querySelector("[data-dialog-video]");
const dialogClose = document.querySelector("[data-dialog-close]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeNav() {
  nav.classList.remove("is-open");
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeNav();
  }
});

document.querySelectorAll("[data-video]").forEach((button) => {
  button.addEventListener("click", () => {
    dialogTitle.textContent = button.dataset.title;
    dialogVideo.src = `${button.dataset.video}?autoplay=1&rel=0`;
    dialog.showModal();
  });
});

function closeDialog() {
  dialogVideo.src = "";
  dialog.close();
}

dialogClose.addEventListener("click", closeDialog);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeDialog();
  }
});

dialog.addEventListener("cancel", () => {
  dialogVideo.src = "";
});
