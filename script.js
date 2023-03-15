const sidebar = document.querySelector(".sidebar");
const button = document.querySelector("#btn-menu");

button.addEventListener("click", () => {
  sidebar.classList.toggle("reduced-version");
  console.log("oi");
});
