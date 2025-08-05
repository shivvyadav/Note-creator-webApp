let btn = document.getElementById("btn");
let allContent = document.querySelector(".allContent");

let contents = document.querySelectorAll(".content");

(function loadStorage() {
  allContent.innerHTML = localStorage.getItem("notes");
})();

function updateStorage() {
  localStorage.setItem("notes", allContent.innerHTML);
}

// This event listener will create a new note when the button is clicked
btn.addEventListener("click", () => {
  // Create a new div for the note
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  allContent.append(contentDiv);
  createNote();
  addImage();
});
// Create a new note with a paragraph and an image for deletion
function createNote() {
  let contentDiv = document.querySelector(".content:last-child");
  let note = document.createElement("p");
  note.classList.add("note");
  note.setAttribute("contenteditable", "true");
  contentDiv.append(note);
}