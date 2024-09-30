"use strict";

// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
// okno dialogowe add new note -------------------------------------------------------------------------*/
var dialogAddNote = document.getElementById('add-new-note-dialog');
var closeAddNote = document.getElementById('add-close');
var openAddNote = document.getElementById('open-add-dialog');
var getTitle = document.getElementById('input-field');
var getCategory = document.getElementById('category-field');
var getTextDescription = document.getElementById('text-field-input');
var checkboxNote = document.getElementById('checkbox-note');
var categoryNote = document.getElementById('category-note'); // przyciski

var addNewNote = document.getElementById("submit-add-button"); //update dialog

var dialogUpdateNote = document.getElementById('update-note-dialog');
var closeUpdateNote = document.getElementById('update-close');
var pencilUpdate = document.getElementById("pencil-edit");

function selectCategory() {
  // const outputBox = document.getElementById('category-note');
  var options = getCategory.selectedOptions;
  var output = '';

  for (var i = 0; i < options.length; i++) {
    if (options[0].value === 'Select') {
      break;
    }

    output += options[i].value;
    console.log(output);
  }

  return output;
}

function createNewNote(note) {
  return "\n    <div id=\"note-".concat(note.id, "\" class=\"note\" style=\"background-color: ").concat(note.color, " ;\">\n    <div class=\"header-note\">\n    <div class=\"checknox-title-note\">\n        <input id=\"checkbox-note\"  ").concat(note.isChecked ? 'checked' : '', " type=\"checkbox\" onclick=\"checkedDone(this,").concat(note.id, ")\"; >\n        <div id=\"title-note\" class=\"").concat(note.isChecked ? 'strikethrough' : '', "\" >").concat(note.title, "</div>\n    </div>\n    <div class=\"update-delete-note\">\n        <button id=\"pencil-edit\" class=\"material-symbols-outlined edit\"\n            onclick=\"updateData(").concat(note.id, ");\">edit</button>\n        <button id=\"bin-delete\" class=\"material-symbols-outlined delete\"\n            onclick=\"deleteTask(").concat(note.id, ");\">delete</button>\n    </div>\n    </div>\n    <div id=\"content-note\" class=\"").concat(note.isChecked ? 'strikethrough' : '', "\" >").concat(note.description, "</div>\n    <div id=\"category-date-container\">\n        <div id=\"creation-date\" class=\"").concat(note.isChecked ? 'strikethrough' : '', "\" >").concat(note.date, "</div>\n        <div id=\"category-note\" class=\"").concat(note.isChecked ? 'strikethrough' : '', "\" >").concat(note.category, "</div>\n    </div>\n    </div>");
}

function displayNotes() {
  var notes = getNotesFromLocalStorage();
  document.getElementById('note-container').innerHTML = notes.map(function (note) {
    return createNewNote(note);
  }).join('');
}

window.onload = function () {
  displayNotes();
}; // to jest z neta


function getRandomColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  if (randomColor.length != 7) {
    randomColor = getRandomColor();
  }

  return randomColor;
}

function generateNote() {
  // let notesArray = [];
  var categoryNote = selectCategory();
  var titleNote = getTitle.value;
  var contentNote = getTextDescription.value;
  var newColor = getRandomColor();
  var date = new Date();
  var creationNote = date.toLocaleDateString(); // dane dla notatki

  var noteDetail = {
    id: Date.now(),
    title: titleNote,
    category: categoryNote,
    description: contentNote,
    isChecked: false,
    date: creationNote,
    color: newColor
  };
  var getNotes = getNotesFromLocalStorage();
  getNotes.push(noteDetail);
  dataSaveToLocalStorage(getNotes);
  displayNotes();
  resetValues(); // notesArray.push(noteDetail);
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
  getTextDescription.value = ""; //nie wiem jak wyzerowac cały getCategory
  // selectedIndex

  getCategory.value;
}

addNewNote.addEventListener("click", function () {
  generateNote();
  dialogAddNote.close();
}, false);

openAddNote.onclick = function () {
  dialogAddNote.showModal();
};

function closeDialog() {
  dialogAddNote.close();
}

function checkedDone(checkbox, noteId) {
  var note = document.getElementById('note-' + noteId);
  var notes = getNotesFromLocalStorage();
  var title = note.querySelector('#title-note');
  var category = note.querySelector('#category-note');
  var description = note.querySelector('#content-note');
  var date = note.querySelector('#creation-date');
  var findId = notes.find(function (n) {
    return n.id === noteId;
  });

  if (checkbox.checked) {
    title.classList.add('strikethrough');
    category.classList.add('strikethrough');
    description.classList.add('strikethrough');
    date.classList.add('strikethrough');
    findId.isChecked = true;
  } else {
    title.classList.remove('strikethrough');
    category.classList.remove('strikethrough');
    description.classList.remove('strikethrough');
    date.classList.remove('strikethrough');
    findId.isChecked = false;
  }

  console.log(note.id);
  dataSaveToLocalStorage(notes);
} // przycisk ołówka do edycji danych


function updateData(noteId) {
  var notes = getNotesFromLocalStorage();
  var noteToEdit = notes.find(function (note) {
    return note.id === noteId;
  });
  document.getElementById("input-field-update").value = noteToEdit.title;
  document.getElementById("category-field-update").value = noteToEdit.category;
  document.getElementById("text-field-input-update").value = noteToEdit.description;
  dialogUpdateNote.showModal();
}

function closeDialogUpdate() {
  dialogUpdateNote.close();
} //działa
//przycisk kosza do usuwania taska 


function deleteTask(noteId) {
  console.log('Usuwanie notatki o id:', noteId);
  var notes = getNotesFromLocalStorage();
  notes = notes.filter(function (note) {
    return note.id !== noteId;
  });
  dataSaveToLocalStorage(notes);
  displayNotes();
} // zapisywanie informacji do localStorage


function dataSaveToLocalStorage(note) {
  localStorage.setItem("notes", JSON.stringify(note));
} // pobieranie informacji z localStorage


function getNotesFromLocalStorage() {
  var notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [];
} // przycisk headera pokazujący elementy All


function ShowAll() {} // przycisk headera pokazujący elementy Home


function showHome() {
  var options = getCategory.selectedOptions;

  if (options[1].value === 'Home') {
    console.log(options.value);
  }
} // przycisk headera pokazujący elementy Work


function showWork() {} // przycisk headera pokazujący elementy Personal


function showPersonal() {} // function loadDataFromLocalStorageToEdit(noteId) {
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