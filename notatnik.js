
// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
// okno dialogowe add new note -------------------------------------------------------------------------*/
const dialogAddNote = document.getElementById('add-new-note-dialog');

const closeAddNote = document.getElementById('add-close');
const openAddNote = document.getElementById('open-add-dialog');

const getTitle = document.getElementById('input-field');
const getCategory = document.getElementById('category-field');
const getTextDescription = document.getElementById('text-field-input');

const checkboxNote = document.getElementById('checkbox-note');

const categoryNote = document.getElementById('category-note');

// przyciski
const addNewNote = document.getElementById("submit-add-button");

//update dialog
const dialogUpdateNote = document.getElementById('update-note-dialog');
const closeUpdateNote = document.getElementById('update-close');
const pencilUpdate = document.getElementById("pencil-edit");

function selectCategory() {
    // const outputBox = document.getElementById('category-note');
    let options = getCategory.selectedOptions;
    let output = '';

    for (let i = 0; i < options.length; i++) {
        if (options[0].value === 'Select') {
            break;
        }
        output += options[i].value;
        console.log(output);
    }
    return output;
}

function createNewNote(note) {
    return `
    <div id="note-${note.id}" class="note" style="background-color: ${note.color} ;">
    <div class="header-note">
    <div class="checknox-title-note">
        <input id="checkbox-note"  ${note.isChecked ? 'checked' : ''} type="checkbox" onclick="checkedDone(this,${note.id})"; >
        <div id="title-note" class="${note.isChecked ? 'strikethrough' : ''}" >${note.title}</div>
    </div>
    <div class="update-delete-note">
        <button id="pencil-edit" class="material-symbols-outlined edit"
            onclick="updateData(${note.id});">edit</button>
        <button id="bin-delete" class="material-symbols-outlined delete"
            onclick="deleteTask(${note.id});">delete</button>
    </div>
    </div>
    <div id="content-note" class="${note.isChecked ? 'strikethrough' : ''}" >${note.description}</div>
    <div id="category-date-container">
        <div id="creation-date" class="${note.isChecked ? 'strikethrough' : ''}" >${note.date}</div>
        <div id="category-note" class="${note.isChecked ? 'strikethrough' : ''}" >${note.category}</div>
    </div>
    </div>`;
}

function displayNotes() {
    let notes = getNotesFromLocalStorage();
    document.getElementById('note-container').innerHTML = notes.map(note => createNewNote(note)).join('');
}

window.onload = function () {
    displayNotes();
}

// to jest z neta
function getRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor.length != 7) {
        randomColor = getRandomColor();
    }
    return randomColor;
}

function generateNote() {

    // let notesArray = [];
    let categoryNote = selectCategory();
    let titleNote = getTitle.value;
    let contentNote = getTextDescription.value;
    let newColor = getRandomColor();
    let date = new Date();
    let creationNote = date.toLocaleDateString();

    // dane dla notatki
    let noteDetail =
    {
        id: Date.now(),
        title: titleNote,
        category: categoryNote,
        description: contentNote,
        isChecked: false,
        date: creationNote,
        color: newColor
    };
    let getNotes = getNotesFromLocalStorage();

    getNotes.push(noteDetail);
    dataSaveToLocalStorage(getNotes);
    displayNotes();

    resetValues();

    // notesArray.push(noteDetail);
    // let newNote = createNewNote(noteDetail);

    // let noteContainer = document.getElementById("note-container");
    // dataSaveToLocalStorage(noteDetail);

    // noteContainer.insertAdjacentHTML("beforeend", newNote);

    // console.log(dataSaveToLocalStorage(notes));
    // resetValues();
    // displayNotes();
}

function resetValues() {
    getTitle.value = "";
    getTextDescription.value = "";
    //nie wiem jak wyzerowac cały getCategory
    // selectedIndex
    getCategory.value;
}

addNewNote.addEventListener("click", () => {
    generateNote();
    dialogAddNote.close();
}, false);

openAddNote.onclick = function () {
    dialogAddNote.showModal();
}

function closeDialog() {
    dialogAddNote.close();
}

function checkedDone(checkbox, noteId) {

    const note = document.getElementById('note-' + noteId)

    let notes = getNotesFromLocalStorage();

    const title = note.querySelector('#title-note');
    const category = note.querySelector('#category-note');
    const description = note.querySelector('#content-note');
    const date = note.querySelector('#creation-date');

    let findId = notes.find(n => n.id === noteId);

    if (checkbox.checked) {
        title.classList.add('strikethrough');
        category.classList.add('strikethrough');
        description.classList.add('strikethrough');
        date.classList.add('strikethrough');
        findId.isChecked = true;
    }
    else {
        title.classList.remove('strikethrough');
        category.classList.remove('strikethrough');
        description.classList.remove('strikethrough');
        date.classList.remove('strikethrough');
        findId.isChecked = false;
    }

    console.log(note.id);
    dataSaveToLocalStorage(notes);
}

// przycisk ołówka do edycji danych
function updateData(noteId) {
    let notes = getNotesFromLocalStorage();
    const noteToEdit = notes.find(note => note.id === noteId);

    document.getElementById("input-field-update").value = noteToEdit.title;
    document.getElementById("category-field-update").value = noteToEdit.category;
    document.getElementById("text-field-input-update").value = noteToEdit.description;

    dialogUpdateNote.showModal();
}

function closeDialogUpdate() {
    dialogUpdateNote.close();
}

//działa
//przycisk kosza do usuwania taska 
function deleteTask(noteId) {
    console.log('Usuwanie notatki o id:', noteId);
    let notes = getNotesFromLocalStorage();
    notes = notes.filter(note => note.id !== noteId)
    dataSaveToLocalStorage(notes);
    displayNotes();
}


// zapisywanie informacji do localStorage
function dataSaveToLocalStorage(note) {
    localStorage.setItem("notes", JSON.stringify(note));
}

// pobieranie informacji z localStorage
function getNotesFromLocalStorage() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}


// przycisk headera pokazujący elementy All
function ShowAll() {

}

// przycisk headera pokazujący elementy Home
function showHome() {
    let options = getCategory.selectedOptions;
    if (options[1].value === 'Home') {
        console.log(options.value)
    }
}


// przycisk headera pokazujący elementy Work
function showWork() {

}

// przycisk headera pokazujący elementy Personal
function showPersonal() {

}

// function loadDataFromLocalStorageToEdit(noteId) {

//     const note = document.getElementById('note-' + noteId);
//     let notes = getNotesFromLocalStorage();

//     noteToEdit = notes.filter(note => note.id === noteId);

//     document.getElementById("input-field").value = noteToEdit.title;
//     document.getElementById("category-field").value = noteToEdit.category;
//     document.getElementById("text-field-input").value = noteToEdit.description;

// }








//stare funkcje raczej do usunięcia jednak narazie sie wstrzymuje

// function selectTitle() {
//     const outputBox = document.getElementById('title-note');
//     let title = getTitle.value;

//     if (title === "") {
//         alert("Please write title for task");
//         return;
//     } else {
//         outputBox.innerHTML = title;
//     }
// }

// function selectDescription() {
//     const outputBox = document.getElementById('content-note');
//     let description = getTextDescription.value;

//     if (description === "") {
//         alert("Please write description");
//         return;
//     } else {
//         outputBox.innerHTML = description;
//     }
// }

// function selectActualDate() {
//     const outputBox = document.getElementById('creation-date');
//     const date = new Date();
//     const todayDate = date.toLocaleDateString();

//     // let day = date.getDay();
//     // let month = date.getMonth() + 1;
//     // let year = date.getFullYear();

//     // let fullDate = `${day} - ${month} - ${year}`;

//     outputBox.innerHTML = todayDate;
// }