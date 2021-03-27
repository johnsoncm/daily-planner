
//Set current day, date, and time in jumbotron
var dayDate = moment();
$("#currentDay").text(dayDate.format("dddd, MMMM Do YYYY h:mm:ss a"));   

var todos = [];

var inputDescription = document.querySelectorAll(".description");
var todoForm = document.querySelector(".time-block");
var todoList = document.querySelector(".form-control");
var todoSpan = document.querySelector(".col-md-10");

function renderMessage(){

    todoList.innerHTML = "";
    todoSpan.textContent = todos.length;

    for (var i = 0; i< todos.length; i++);{
    var todo = todos[i];
    console.log(todos);
    console.log(todos.length);

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index" , i);

    var button = document.createElement("button");
    button.textContent = "Saved";


    li.appendChild(button);    
    todoList.appendChild(li);
} 
};

function init(){
    var storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos !== null){
        todos = storedTodos;
    }
    renderMessage();
}

function storedTodos() {
    localStorage.setItem("todos" , JSON.stringify(todos));
}

todoForm.addEventListener("submit" , function(event){
    event.preventDefault();

    var todoText = inputDescription.trim();

    if (todoText === ""){
        return;
    }

    todos.push(todoText);
    inputDescription.value = "";
console.log(todoText);
    storedTodos();
    renderMessage();

});

todoList.addEventListener("click", function(event){
    var element = event.target;

    if (element.matches("button") === true){
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);

        storedTodos();
        renderMessage();

    }
});

init()
    



// function renderMessage(){
//     // input = JSON.parse(localStorage.getItem("input"));
//     if(!localStorage.getItem('input')){
//         window.localStorage.setItem('input' , JSON.stringify($scope.initData));
//         var inputDescription = document.querySelectorAll(".description")
//         inputDescription.value = input
//         document.write(input);
// }
// // let input = localStorage.getItem("input");
// // console.log(input);
// }


$(".saveBtn").on("click", function(){
    //gets the value of user input
    var input = $(this).siblings(".form-control").val();
    
    localStorage.setItem("input" , input);
    localStorage.setItem("hour-9" , input);
    localStorage.setItem("hour-10" , input);
    localStorage.setItem("hour-11" , input);
    localStorage.setItem("hour-12" , input);
    localStorage.setItem("hour-1" , input);
    localStorage.setItem("hour-2" , input);
    localStorage.setItem("hour-3" , input);
    localStorage.setItem("hour-4" , input);
    localStorage.setItem("hour-5" , input);

    
});
// var input = localStorage.getItem("form-control");

// // function renderInput(){


// }


$(".time-block").each(function() {
   
    //setting hour to equal 9, 10, 11, 12, 1 etc.
    //parsing out the hour from a string to a number in order to compare number to number vs number to string
    
var hour = parseInt($(this).data().number);
  
var currentTime = parseInt(moment().format("HH"))

    //  localStorage.setItem("hour" , hour);
    //  console.log("hour" , hour);

    if(currentTime > hour){
        $(this).addClass("past");
    } else if (currentTime < hour){
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
       
    }  
});

// renderMessage();
console.log((localStorage.getItem("input")));



// function timeNow(){
//     $('#current-day').html(moment().format("MMMM D YYYY hh:mm A'"));
// }
// setInterval(timeNow, 1000);

// timeNow();




// var saveButton = document.querySelector(".saveBtn");
// saveButton.addEventListener("click", function () {
//     //get user input
//     //save to local storage

//     var userInput = document.querySelector(".description")

//     localStorage.setItem("description" , userInput);
//     console.log("compare" , userInput);
    
// });

// var inputTextArea = document.getElementById("description");
// function displayData(){
//     var textArea   = localStorage.getItem("description");

    
    
//     textArea.textContent = inputTextArea;
  
// };