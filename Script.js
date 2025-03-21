const createNotesBtn = document.getElementById("create-note-btn");
const createNoteSection = document.getElementById("create-note-section");
const notesContainer = document.getElementById("notes-container");
const title = document.getElementById("title");

const addNote = btn =>{
    const note = document.querySelector(`${btn.parentElement.tagName} textarea`);
    notesContainer.innerHTML += `
    <div>
        <p>${note.value}</p>
        <button onclick="deleteNote(this)" type="button">Delete Note</button>
        <button onclick="editNote(this)" type="button">Edit Note</button>
    </div>`
}



const deleteNote = btn =>{

}

const editNote = btn =>{

}

createNotesBtn.addEventListener("click", ()=>{
    notesContainer.innerHTML += `
    <div id="div">
        <textarea></textarea>
        <button onclick="addNote(this)" class="btn" type="button">Add Note</button>
    </div>`;
})

