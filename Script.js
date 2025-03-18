const createNotesBtn = document.getElementById("create-note-btn");
const notesContainer = document.getElementById("notes-container");
const title = document.getElementById("title");

createNotesBtn.addEventListener("click", ()=>{
    notesContainer.innerHTML += `
    <textarea></textarea>`;
})
