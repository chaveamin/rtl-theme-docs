const pathname = window.location.pathname;
const sidebar = document.querySelector("aside");

pathname == "/" ? (sidebar.style.display = "none") : "";
