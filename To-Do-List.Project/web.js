const inputBox = document.querySelector("#name");
const city = document.querySelector("#city");
const addBtn = document.querySelector("#submit");
const deleteAllBtn = document.querySelector("#allToDo");
const deleteAllComplete = document.querySelector("#allComplete");
const deleteAllProg = document.querySelector("#allProgress");
const deleteAllReview = document.querySelector("#allReview");
const itemList = document.querySelector(".itemList");
const doneList = document.querySelector(".doneList");
const progressList = document.querySelector(".progressList");
const reviewList = document.querySelector(".reviewList");
const closeBtn = document.querySelector("#close");

showTasks();
showProgress();
showReview();
showComplete();
addBtn.onclick = () => {
    let userEnteredValue = inputBox.value; 
    let userDateValue = city.value;
    let getLocalStorageData = localStorage.getItem("New Todo"); 
    let getLocalStorageDateValue = localStorage.getItem("Date");
    let getLocalStorageProg = localStorage.getItem("Progress");
    let getLocalStorageProgDate = localStorage.getItem("Progress Date");
    let getLocalStorageReview = localStorage.getItem("Review");
    let getLocalStorageReviewDate =localStorage.getItem("Review Date");
    let getLocalStorageDoneToDo = localStorage.getItem("Done To Do");
    let getLocalStorageCompletionDate = localStorage.getItem("Completion Date"); 

    if (getLocalStorageDoneToDo == null) { 
        doneArray = []; 
    } else {
        doneArray = JSON.parse(getLocalStorageDoneToDo);
    }
    if (getLocalStorageCompletionDate == null) { 
            completeArray = []; 
    } else {
        completeArray = JSON.parse(getLocalStorageCompletionDate);
    }
    if (getLocalStorageData == null) { 
        listArray = []; 
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    if (getLocalStorageDateValue == null) { 
        lArray = [];
    } else {
        lArray = JSON.parse(getLocalStorageDateValue);
    }
    if (getLocalStorageProg == null) { 
        progArray = []; 
    } else {
        progArray = JSON.parse(getLocalStorageProg);
    }
    if (getLocalStorageProgDate == null) { 
        progDateArray = []; 
    } else {
        progDateArray = JSON.parse(getLocalStorageProgDate);
    }
    if (getLocalStorageReview == null) { 
        reviewArray = []; 
    } else {
        reviewArray = JSON.parse(getLocalStorageReview);
    }
    if (getLocalStorageReviewDate == null) { 
        reviewDateArray = []; 
    } else {
        reviewDateArray = JSON.parse(getLocalStorageReviewDate);
    }
    listArray.push(userEnteredValue);
    lArray.push(userDateValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    localStorage.setItem("Date", JSON.stringify(lArray));
    localStorage.setItem("Progress", JSON.stringify(progArray));
    localStorage.setItem("Progress Date", JSON.stringify(progDateArray));
    localStorage.setItem("Review", JSON.stringify(reviewArray));
    localStorage.setItem("Review Date", JSON.stringify(reviewDateArray));
    localStorage.setItem("Done To Do", JSON.stringify(doneArray));
    localStorage.setItem("Completion Date", JSON.stringify(completeArray));
    showTasks();
    showProgress();
    showReview();
    showComplete();
}

function showTasks() {
    const getLocalStorageData = localStorage.getItem("New Todo");
    const getLocalStorageDateValue = localStorage.getItem("Date")
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    if (getLocalStorageDateValue == null) {
        lArray = [];
    } else {
        lArray = JSON.parse(getLocalStorageDateValue);
    }
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArray.length; 
    if (listArray.length > 0) { 
        deleteAllBtn.classList.add("active"); 
    } else {
        deleteAllBtn.classList.remove("active"); 
    }
    let newList = "";
    for (let i = 0; i < listArray.length; i++) {
        let index = i;
        newList += `
    <tr>
    <td>${listArray[i]}</td>
    <td>${lArray[i]}</td>
    <td>
      <a href="#" data-toggle="modal" data-target="#exampleModal" onclick="editTask(${index})"><i class="far fa-edit fa-lg p-2"></i></a>
      <a href="#" onclick="complete(${index})"><i class="far fa-check-circle fa-lg p-2"></i></a>
      <a href="#" onclick="deleteTask(${index})"><i class="fas fa-trash fa-lg p-2" style="color:gray"></i></a>
      <td>
    </tr>
    `}
    itemList.innerHTML = newList;
    inputBox.value = "";
    city.value = "";
}

function showProgress () {
    let getLocalStorageProg = localStorage.getItem("Progress");
    let getLocalStorageProgDate = localStorage.getItem("Progress Date");
    if (getLocalStorageProg == null) {
        progArray = [];
    } else {
        progArray = JSON.parse(getLocalStorageProg);
    }
    if (getLocalStorageProgDate == null) {
        progDateArray = [];
    } else {
        progDateArray = JSON.parse(getLocalStorageProgDate);
    }
    let progressTasksNumb = document.querySelector(".progressTasks")
    progressTasksNumb.textContent = progArray.length;
    if (progArray.length > 0) { 
        deleteAllProg.classList.add("active"); 
    } else {
        deleteAllProg.classList.remove("active"); 
    }
    let newL = "";
    for (let i = 0; i < progArray.length; i++) {
        let index = i;
        newL += `<tr>
        <td>${progArray[i]}</td>
        <td>${getTodayDate()}</td>
        <td>
        <a href="#" onclick="complete1(${index})"><i class="far fa-check-circle fa-lg p-2"></i></a>
        <a href="#" onclick="deleteTask1(${index})"><i class="fas fa-trash fa-lg p-2" style="color:gray"></i></a>
        </td>
        </tr>`
    }
    progressList.innerHTML = newL;
}

function showReview () {
    let getLocalStorageReview = localStorage.getItem("Review");
    let getLocalStorageReviewDate =localStorage.getItem("Review Date");
    if (getLocalStorageReview == null) {
        reviewArray = [];
    } else {
        reviewArray = JSON.parse(getLocalStorageReview);
    }
    if (getLocalStorageReviewDate == null) {
        reviewDateArray = [];
    } else {
        reviewDateArray = JSON.parse(getLocalStorageReviewDate);
    }
    let reviewTasksNumb = document.querySelector(".reviewTasks")
    reviewTasksNumb.textContent = reviewArray.length;
    if (reviewArray.length > 0) {
        deleteAllReview.classList.add("active");
    } else {
        deleteAllReview.classList.remove("active");
    };
    let newList = "";
    for (let i = 0; i < reviewArray.length; i++) {
        let index = i;
        newList += `<tr>
        <td>${reviewArray[i]}</td>
        <td>${getTodayDate()}</td>
        <td>
        <a href="#" onclick="complete2(${index})"><i class="far fa-check-circle fa-lg p-2"></i></a>
        <a href="#" onclick="deleteTask2(${index})"><i class="fas fa-trash fa-lg p-2" style="color:gray"></i></a>
        </td>
        </tr>`
    }
    reviewList.innerHTML = newList;
}

function showComplete() {
    let getLocalStorageDoneToDo = localStorage.getItem("Done To Do");
    let getLocalStorageCompletionDate = localStorage.getItem("Completion Date");
    if (getLocalStorageDoneToDo == null) { 
        doneArray = []; 
    } else {
        doneArray = JSON.parse(getLocalStorageDoneToDo);
    }
    if (getLocalStorageCompletionDate == null) { 
        completeArray = []; 
    } else {
        completeArray = JSON.parse(getLocalStorageCompletionDate);
    }
    let completionTasksNumb = document.querySelector(".completionTasks");
    completionTasksNumb.textContent = doneArray.length;
    if (doneArray.length > 0) { 
        deleteAllComplete.classList.add("active"); 
    } else {
        deleteAllComplete.classList.remove("active"); 
    }
    let newList = "";
    for (let i = 0; i < doneArray.length; i++) {
        let index = i;
        newList += `
    <tr>
    <td>${doneArray[i]}</td>
    <td>${getTodayDate()}</td>
    <td><i class="fas fa-award fa-lg p-3" style="color:red"></i>
    <span class="icon" onclick="deleteDone(${index})">
    <i class="fas fa-trash fa-lg" style="color:gray"></i>
    </span><td>
    </tr>
    `}
    doneList.innerHTML = newList;
}

function editTask(index) {
    let addBtn = document.querySelector("#submit");
    let saveTask = document.querySelector("#saveTask");
    let saveIndex = document.querySelector("#saveIndex");
    saveIndex.value = index;
    let getLocalStorageData = localStorage.getItem("New Todo");
    let getLocalStorageDateValue = localStorage.getItem("Date");
    listArray = JSON.parse(getLocalStorageData);
    lArray = JSON.parse(getLocalStorageDateValue);
    inputBox.value = listArray[index];
    city.value = lArray[index];
    addBtn.style.display = "none";
    saveTask.style.display = "block";
}

function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New Todo");
    let getLocalStorageDateValue = localStorage.getItem("Date")
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    lArray = JSON.parse(getLocalStorageDateValue);
    lArray.splice(index, 1);
    localStorage.setItem("Date", JSON.stringify(lArray));
    showTasks(); 
}

function deleteTask1(index) {
    let getLocalStorageProg = localStorage.getItem("Progress");
    let getLocalStorageProgDate = localStorage.getItem("Progress Date")
    progArray = JSON.parse(getLocalStorageProg);
    progArray.splice(index, 1);
    localStorage.setItem("Progress", JSON.stringify(progArray));
    progDateArray = JSON.parse(getLocalStorageProgDate);
    progDateArray.splice(index, 1);
    localStorage.setItem("Progress Date", JSON.stringify(progDateArray));
    showProgress();
}

function deleteTask2(index) {
    let getLocalStorageReview = localStorage.getItem("Review");
    let getLocalStorageReviewDate = localStorage.getItem("Review Date")
    reviewArray = JSON.parse(getLocalStorageReview);
    reviewArray.splice(index, 1);
    localStorage.setItem("Review", JSON.stringify(reviewArray));
    reviewDateArray = JSON.parse(getLocalStorageReviewDate);
    reviewDateArray.splice(index, 1);
    localStorage.setItem("Review Date", JSON.stringify(reviewDateArray));
    showReview();
}

function deleteDone(index) {
    let getLocalStorageDoneToDo = localStorage.getItem("Done To Do");
    let getLocalStorageCompletionDate = localStorage.getItem("Completion Date");
    doneArray = JSON.parse(getLocalStorageDoneToDo);
    doneArray.splice(index, 1);
    localStorage.setItem("Done To Do", JSON.stringify(doneArray));
    completeArray = JSON.parse(getLocalStorageCompletionDate);
    completeArray.splice(index, 1);
    localStorage.setItem("Completion Date", JSON.stringify(completeArray));
    showComplete();
}

deleteAllBtn.onclick = () => {
    listArray = [];
    lArray = [];
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    localStorage.setItem("Date", JSON.stringify(lArray));
    showTasks();
    showProgress();
    showReview();
    showComplete();
}

deleteAllProg.onclick = () => {
    progArray = [];
    progDateArray = [];
    localStorage.setItem("Progress", JSON.stringify(progArray));
    localStorage.setItem("Progress Date", JSON.stringify(progDateArray));
    showTasks();
    showProgress();
    showReview();
    showComplete();
}

deleteAllReview.onclick = () => {
    reviewArray = [];
    reviewDateArray = [];
    localStorage.setItem("Review", JSON.stringify(reviewArray));
    localStorage.setItem("Review Date", JSON.stringify(reviewDateArray));
    showTasks();
    showProgress();
    showReview();
    showComplete();
}

deleteAllComplete.onclick = () => {
    doneArray = [];
    completeArray = [];
    localStorage.setItem("Done To Do", JSON.stringify(doneArray));
    localStorage.setItem("Completion Date", JSON.stringify(completeArray));
    showTasks();
    showProgress();
    showReview();
    showComplete();
}


let saveTask = document.querySelector("#saveTask");
saveTask.addEventListener("click", function () {
    let addBtn = document.querySelector("#submit");
    let saveTask = document.querySelector("#saveTask");
    let saveIndex = document.querySelector("#saveIndex").value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    let getLocalStorageDateValue = localStorage.getItem("Date");
    let listArray = JSON.parse(getLocalStorageData);
    let lArray = JSON.parse(getLocalStorageDateValue);
    listArray[saveIndex] = inputBox.value;
    lArray[saveIndex] = city.value;
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    localStorage.setItem("Date", JSON.stringify(lArray));
    addBtn.style.display = "block";
    saveTask.style.display = "none";
    inputBox.value = "";
    city.value = "";
    showTasks();
})

function complete(index) {
    let progToDo = listArray[index];
    let progDate = lArray[index];
    let getLocalStorageProg = localStorage.getItem("Progress");
    let getLocalStorageProgDate = localStorage.getItem("Progress Date");
    if (getLocalStorageProg == null) { 
        progArray = []; 
    } else {
        progArray = JSON.parse(getLocalStorageProg);
    }
    if (getLocalStorageProgDate == null) { 
        progDateArray = []; 
    } else {
        progDateArray = JSON.parse(getLocalStorageProgDate);
    }
    progArray.push(progToDo);
    progDateArray.push(progDate);
    localStorage.setItem("Progress", JSON.stringify(progArray));
    localStorage.setItem("Progress Date", JSON.stringify(progDateArray));
    deleteTask(index);
    showProgress();
}

function complete1(index) {
    let reviewToDo = progArray[index];
    let reviewDate = progDateArray[index];
    let getLocalStorageReview = localStorage.getItem("Review");
    let getLocalStorageReviewDate = localStorage.getItem("Review Date");
    if (getLocalStorageReview == null) { 
        reviewArray = []; 
    } else {
        reviewArray = JSON.parse(getLocalStorageReview);
    }
    if (getLocalStorageReviewDate == null) { 
        reviewDateArray = []; 
    } else {
        reviewDateArray = JSON.parse(getLocalStorageReviewDate);
    }
    reviewArray.push(reviewToDo);
    reviewDateArray.push(reviewDate);
    localStorage.setItem("Review", JSON.stringify(reviewArray));
    localStorage.setItem("Review Date", JSON.stringify(reviewDateArray));
    deleteTask1(index);
    showReview();
}

function complete2(index) {
    let doneToDo = reviewArray[index];
    let doneDate = reviewDateArray[index];
    let getLocalStorageDoneToDo = localStorage.getItem("Done To Do");
    let getLocalStorageCompletionDate = localStorage.getItem("Completion Date");
    if (getLocalStorageDoneToDo == null) { 
        doneArray = []; 
    } else {
        doneArray = JSON.parse(getLocalStorageDoneToDo);
    }
    if (getLocalStorageCompletionDate == null) { 
        completeArray = []; 
    } else {
        completeArray = JSON.parse(getLocalStorageCompletionDate);
    }
    doneArray.push(doneToDo);
    completeArray.push(doneDate);
    localStorage.setItem("Done To Do", JSON.stringify(doneArray));
    localStorage.setItem("Completion Date", JSON.stringify(completeArray));
    deleteTask2(index);
    showComplete();
}

function getTodayDate() {
    let fullDate = new Date();
    let yyyy = fullDate.getFullYear();
    let MM = (fullDate.getMonth() + 1) >= 10 ? (fullDate.getMonth() + 1) : ("0" + (fullDate.getMonth() + 1));
    let dd = fullDate.getDate() < 10 ? ("0" + fullDate.getDate()) : fullDate.getDate();
    let today = yyyy + "-" + MM + "-" + dd;
    return today;
}

closeBtn.onclick = () => {
    inputBox.value = "";
    city.value = "";
    addBtn.style.display = "block";
    saveTask.style.display = "none";
}