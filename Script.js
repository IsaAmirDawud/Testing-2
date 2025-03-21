const createNotesBtn = document.getElementById("create-note-btn");
const createNoteSection = document.getElementById("create-note-section");
const notesContainer = document.getElementById("notes-container");
const title = document.getElementById("title");

const addNote = this =>{
    const idk = document.querySelector("this.target.parentElement textarea");
    console.log(idk.value); 
    //const note2 = this.target.tagName
}

createNotesBtn.addEventListener("click", ()=>{
    notesContainer.innerHTML += `
    <div>
    <textarea></textarea>
    <button onclick="addNote(this)" class="btn" type="button">Add Note</button>
    </div>`;
    
})