let btn = document.getElementById("btn");
let allContent = document.querySelector(".allContent");

let contents = document.querySelectorAll(".content");

(function loadStorage() {
  allContent.innerHTML = localStorage.getItem("notes");
})();

function updateStorage() {
  localStorage.setItem("notes", allContent.innerHTML);
}