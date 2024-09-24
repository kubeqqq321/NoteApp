
// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
// okno dialogowe add new note -------------------------------------------------------------------------*/
const dialogAddNote = document.getElementById('add-new-note-dialog');
const closeAddNote = document.getElementById('add-close');
const openAddNote = document.getElementById('open-add-dialog');

const getTitle = document.getElementById('input-field');
const getCategory = document.getElementById('category-field');
// const getCategory = document.getElementById('personlist').value = Person_ID;
// const getCategory = document.getElementsByTagName('option');
// const getCategoryElement = getCategory.children;
// console.log(getCategoryElement[2])

const getTextDescription = document.getElementById('text-field-input');



// const pencilToUpdate = document.getElementById('pencil-edit');
// const binToDelete = document.getElementById('bin-delete');

// przyciski

const addNewNote = document.getElementById("submit-add-button");


function selectCategory() {
    const outputBox = document.getElementById('category-note');
    let options = getCategory.selectedOptions;
    let output = '';

    for (let i = 0; i < options.length; i++) {
        if (options[0].value === 'Select') {
            break;
        }
        output += options[i].value;
    }
    outputBox.style.fontWeight = 'bold';
    outputBox.textContent = output;
}

function selectTitle() {
    const outputBox = document.getElementById('title-note');
    let title = getTitle.value;

    if (title === "") {
        alert("Please write title for task");
        return;
    } else {
        outputBox.innerHTML = title;
    }
}

function selectDescription() {
    const outputBox = document.getElementById('content-note');
    let description = getTextDescription.value;

    if (description === "") {
        alert("Please write description");
        return;
    } else {
        outputBox.innerHTML = description;
    }
}

function selectActualDate() {
    const outputBox = document.getElementById('creation-date');
    const date = new Date();
    const todayDate = date.toLocaleDateString();

    // let day = date.getDay();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();

    // let fullDate = `${day} - ${month} - ${year}`;

    outputBox.innerHTML = todayDate;
}

// function generateNote() {
//     let i = 0;
//     const table = document.getElementById("note-container");
//     let noteDiv = document.createElement("div");
//     noteDiv.id = "note" + i++;
//     let note = `
//     <div class="header-note">
//     <div class="checknox-title-note">
//         <input id="checkbox-note" type="checkbox">
//         <div id="title-note"></div>
//     </div>
//     <div class="update-delete-note">
//         <span id="pencil-edit" class="material-symbols-outlined edit"
//             onclick="updateData();">edit</span>
//         <span id="bin-delete" class="material-symbols-outlined delete"
//             onclick="deleteTask();">delete</span>
//     </div>
// </div>
// <div id="content-note"></div>
// <div id="category-date-container">
//     <div id="creation-date"></div>
//     <div id="category-note"></div>
// </div>
// `

//     let newElem = document.getElementById("note-container").appendChild(noteDiv);
//     // const newRow = table.appendChild(note);
//     // const cell = newRow.insertCell(0);
//     // table.innerHTML = newElem;
// }

function generateNote(test = "test") {
    let note = `<div class="note">
                <div class="header-note">
                <div class="checknox-title-note">
                    <input id="checkbox-note" type="checkbox">
                    <div id="title-note">${test}</div>
                </div>
                <div class="update-delete-note">
                    <span id="pencil-edit" class="material-symbols-outlined edit"
                        onclick="updateData();">edit</span>
                    <span id="bin-delete" class="material-symbols-outlined delete"
                        onclick="deleteTask();">delete</span>
                </div>
            </div>
            <div id="content-note">test</div>
            <div id="category-date-container">
                <div id="creation-date"></div>
                <div id="category-note"></div>
            </div>
        </div>`

    document.getElementById("note-container").innerHTML = note;
}

addNewNote.addEventListener("click", () => {
    generateNote();
    // selectTitle();
    selectCategory();
    selectDescription();
    selectActualDate()
    dialogAddNote.close();

}, false);

// ----------------------
// const noteContainer = document.getElementById('note-container');
// const divElements = document.getElementsByTagName('div');

// toDoList = {
//     "title": getTitle,
//     "category": category,
//     "description": description,
//     "date": data,
//     "isComplete": Complete,
// }
// console.log(getCategory[0])
// console.log(divElements);
// ----------------------

// function changeColor(event) {
//     event.dialogAddNote.showModal();
// }
// pencilToUpdate.addEventListener("click", (event) => {
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



function handleSubmit() {
    // let array = [];
    // let title = getTitle.value;
    // // const category = getCategory;
    // let getCategoryElement = getCategory.children.value;
    // let description = getTextDescription.value;
    // if (!title) {
    //     alert("Please write title for task");
    //     return;
    // }
    // console.log(title);
    // console.log(description);
    // console.log(getCategoryElement[2])
    // console.log(array[title, description])
    // console.log(getTitle);
    // alert('Thank you for subscribing!');
    // closeDialog();
}


function getDataFromModalAdd(title, category, description) {
    console.log()
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


function makeToDoCard() {

}

//generowanie karty to do a stronie głównej

// przycisk ołówka do edycji danych
function updateData() {

}


//przycisk kosza do usuwania taska
function deleteTask() {

}