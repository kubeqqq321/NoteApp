"use strict";

// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
// okno dialogowe add new note -------------------------------------------------------------------------*/
var dialogAddNote = document.getElementById('add-new-note-dialog');
var closeAddNote = document.getElementById('add-close');
var openAddNote = document.getElementById('open-add-dialog');
var getTitle = document.getElementById('input-field');
var getCategory = document.getElementById('category-field');
var getTextDescription = document.getElementById('text-field-input');
var checkboxNote = document.getElementById('checkbox-note'); // const binToDelete = document.getElementById('bin-delete');
// przyciski

var addNewNote = document.getElementById("submit-add-button");

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
  return "\n    <div id=\"note-".concat(note.id, "\" class=\"note\" style=\"background-color: ").concat(note.color, " ;\">\n    <div class=\"header-note\">\n    <div class=\"checknox-title-note\">\n        <input id=\"checkbox-note\" type=\"checkbox\" onclick=\"checkedDone(this)\"; >\n        <div id=\"title-note\">").concat(note.title, "</div>\n    </div>\n    <div class=\"update-delete-note\">\n        <span id=\"pencil-edit\" class=\"material-symbols-outlined edit\"\n            onclick=\"updateData(").concat(note.id, ");\">edit</span>\n        <span id=\"bin-delete\" class=\"material-symbols-outlined delete\"\n            onclick=\"deleteTask(").concat(note.id, ");\">delete</span>\n    </div>\n    </div>\n    <div id=\"content-note\">").concat(note.description, "</div>\n    <div id=\"category-date-container\">\n        <div id=\"creation-date\">").concat(note.date, "</div>\n        <div id=\"category-note\">").concat(note.category, "</div>\n    </div>\n    </div>");
}

function getRandomColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  if (randomColor.length != 7) {
    randomColor = generateRandomColor();
  }

  return randomColor;
}

function generateNote() {
  var notesArray = [];
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
    //to jest do przemyślenia czy jest to do czegoś potrzebne
    date: creationNote,
    color: newColor
  };
  notesArray.push(noteDetail);
  var newNote = createNewNote(noteDetail);
  var noteContainer = document.getElementById("note-container");
  noteContainer.insertAdjacentHTML("beforeend", newNote);
  resetValues();
}

function resetValues() {
  getTitle.value = "";
  getTextDescription.value = ""; //nie wiem jak wyzerowac cały getCategory

  getCategory[0];
}

addNewNote.addEventListener("click", function () {
  generateNote();
  dialogAddNote.close();
}, false); // ----------------------
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
};

function closeDialog() {
  dialogAddNote.close();
}

function checkedDone(checkbox) {
  var titleNote = document.getElementById("title-note"); // Uncheck

  checkboxNote.checked = true;

  if (checkboxNote.checked == true) {
    titleNote.style.textDecoration("line-through");
  } // // Check
  // checkboxNote.checked = true;

} // okno dialogowe add new note -------------------------------------------------------------------------*/
// przycisk headera pokazujący elementy Al


function ShowAll() {} // przycisk headera pokazujący elementy Home


function showHome() {} // przycisk headera pokazujący elementy Work


function showWork() {} // przycisk headera pokazujący elementy Personal


function showPersonal() {} //generowanie karty to do a stronie głównej
// przycisk ołówka do edycji danych


function updateData(noteId) {
  console.log('Aktualizacja notatki o id:', noteId);
} //przycisk kosza do usuwania taska


function deleteTask(noteId) {
  console.log('Usuwanie notatki o id:', noteId);
} //stare funkcje raczej do usunięcia jednak narazie sie wstrzymuje
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