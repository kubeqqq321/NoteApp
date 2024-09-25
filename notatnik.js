
// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
// okno dialogowe add new note -------------------------------------------------------------------------*/
const dialogAddNote = document.getElementById('add-new-note-dialog');
const closeAddNote = document.getElementById('add-close');
const openAddNote = document.getElementById('open-add-dialog');

const getTitle = document.getElementById('input-field');
const getCategory = document.getElementById('category-field');
const getTextDescription = document.getElementById('text-field-input');

const checkboxNote = document.getElementById('checkbox-note');
// const binToDelete = document.getElementById('bin-delete');

// przyciski
const addNewNote = document.getElementById("submit-add-button");


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
        <input id="checkbox-note" type="checkbox" onclick="checkedDone(this)"; >
        <div id="title-note">${note.title}</div>
    </div>
    <div class="update-delete-note">
        <span id="pencil-edit" class="material-symbols-outlined edit"
            onclick="updateData(${note.id});">edit</span>
        <span id="bin-delete" class="material-symbols-outlined delete"
            onclick="deleteTask(${note.id});">delete</span>
    </div>
    </div>
    <div id="content-note">${note.description}</div>
    <div id="category-date-container">
        <div id="creation-date">${note.date}</div>
        <div id="category-note">${note.category}</div>
    </div>
    </div>`;
}

function getRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor.length != 7) {
        randomColor = generateRandomColor();
    }
    return randomColor;
}

function generateNote() {

    let notesArray = [];
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
        isChecked: false, //to jest do przemyślenia czy jest to do czegoś potrzebne
        date: creationNote,
        color: newColor
    };

    notesArray.push(noteDetail);

    let newNote = createNewNote(noteDetail);

    let noteContainer = document.getElementById("note-container");
    noteContainer.insertAdjacentHTML("beforeend", newNote);

    resetValues();
}

function resetValues() {
    getTitle.value = "";
    getTextDescription.value = "";
    //nie wiem jak wyzerowac cały getCategory
    getCategory[0];
}

addNewNote.addEventListener("click", () => {
    generateNote();
    dialogAddNote.close();
}, false);

// ----------------------
// const checkboxNote = document.getElementById('checkbox-note');
// const divElements = document.getElementsByTagName('div');

// function changeColor(event) {
//     event.dialogAddNote.showModal();
// }

// checkboxNote.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "red";
//     binToDelete.style.backgroundColor = "tomato";

// });
// binToDelete.addEventListener("mouseover", (event) => {
//     event.target.textContent = "Bin";
// })
// binToDelete.addEventListener("mouseout", (event) => {
//     event.target.textContent = "delete";
// })

openAddNote.onclick = function () {
    dialogAddNote.showModal();
}

function closeDialog() {
    dialogAddNote.close();
}


function checkedDone(checkbox) {
    let titleNote = document.getElementById("title-note");
    // Uncheck
    checkboxNote.checked = true;

    if (checkboxNote.checked == true) {
        titleNote.style.textDecoration("line-through");
    }

    // // Check
    // checkboxNote.checked = true;


}

// okno dialogowe add new note -------------------------------------------------------------------------*/


// przycisk headera pokazujący elementy Al
function ShowAll() {

}

// przycisk headera pokazujący elementy Home
function showHome() {

}


// przycisk headera pokazujący elementy Work
function showWork() {

}

// przycisk headera pokazujący elementy Personal
function showPersonal() {

}

//generowanie karty to do a stronie głównej

// przycisk ołówka do edycji danych
function updateData(noteId) {
    console.log('Aktualizacja notatki o id:', noteId);
}


//przycisk kosza do usuwania taska
function deleteTask(noteId) {
    console.log('Usuwanie notatki o id:', noteId);
}



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