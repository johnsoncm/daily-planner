
//Set current day, date, and time in jumbotron
// var dayDate = moment();
// $("#currentDay").text(dayDate.format("dddd, MMMM Do YYYY h:mm:ss a"));   

// var todos = [];

// var inputDescription = document.querySelectorAll(".description");
// var todoForm = document.querySelector(".time-block");
// var todoList = document.querySelector(".form-control");
// var todoSpan = document.querySelector(".col-md-10");

// function renderMessage(){

//     todoList.innerHTML = "";
//     todoSpan.textContent = todos.length;

//     for (var i = 0; i< todos.length; i++);{
//     var todo = todos[i];
//     console.log(todos);
//     console.log(todos.length);

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index" , i);

//     var button = document.createElement("button");
//     button.textContent = "Saved";


//     li.appendChild(button);    
//     todoList.appendChild(li);
// } 
// };

// function init(){
//     var storedTodos = JSON.parse(localStorage.getItem("todos"));

//     if (storedTodos !== null){
//         todos = storedTodos;
//     }
//     renderMessage();
// }

// function storedTodos() {
//     localStorage.setItem("todos" , JSON.stringify(todos));
// }

// todoForm.addEventListener("submit" , function(event){
//     event.preventDefault();

//     var todoText = inputDescription.trim();

//     if (todoText === ""){
//         return;
//     }

//     todos.push(todoText);
//     inputDescription.value = "";
// console.log(todoText);
//     storedTodos();
//     renderMessage();

// });

// todoList.addEventListener("click", function(event){
//     var element = event.target;

//     if (element.matches("button") === true){
//         var index = element.parentElement.getAttribute("data-index");
//         todos.splice(index, 1);

//         storedTodos();
//         renderMessage();

//     }
// });

// init()
    



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

// function renderMessage(){



   
// var hour10 = localStorage.getItem("hour-10");
// $("#hour-10 description").val(hour10);
   
// var hour11 = localStorage.getItem("hour-11");
// $("#hour-11 description").val(hour11);
    
// var hour12 = localStorage.getItem("hour-12");
// $("#hour-12 description").val(hour12);

// var hour1 = localStorage.getItem("hour-1");
// $("#hour-1 description").val(hour1);
    
// var hour2 = localStorage.getItem("hour-2");
// $("#hour-2 description").val(hour2);
   
// var hour3 = localStorage.getItem("hour-3");
// $("#hour-3 description").val(hour3);

// var hour4 = localStorage.getItem("hour-4");
// $("#hour-4 description").val(hour4);
   
// var hour5 = localStorage.getItem("hour-5");
// $("#hour-5 description").val(hour5);
  

// }

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        //gets the value of user input
        // var input = $(this).siblings(".form-control").val();
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
    
        localStorage.setItem(time, value);
        $(".notification").addClass("show");
        setTimeout(function() {
            $(".notification").removeClass("show");
            
        }, 5000);
})



   

    // localStorage.setItem("input" , input);
    // localStorage.setItem("hour-9" ,input );
    // localStorage.setItem("hour-10", input);
    // localStorage.setItem("hour-11" , input);
    // localStorage.setItem("hour-12" , input);
    // localStorage.setItem("hour-1" , input);
    // localStorage.setItem("hour-2" , input);
    // localStorage.setItem("hour-3" , input);
    // localStorage.setItem("hour-4" , input);
    // localStorage.setItem("hour-5" , input);


    






// var input = localStorage.getItem("form-control");

// // function renderInput(){


// }

function hourUpdater(){
    $(".time-block").each(function() {
   
        //setting hour to equal 9, 10, 11, 12, 1 etc.
        //parsing out the hour from a string to a number in order to compare number to number vs number to string
        
    // var hour = parseInt($(this).data().number);
    
    var currentTime = parseInt($(this).attr("id").split("-")[1]);
    
    // var currentTime = parseInt(moment().format("HH"))
    
        //  localStorage.setItem("hour" , hour);
        //  console.log("hour" , hour);
    
        if(currentTime > hour){
            $(this).addClass("past");
        } else if(currentTime === hour){
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
          
    
        }  
    }   
)};
hourUpdater();
var interval = setInterval(hourUpdater, 15000);

$("#hour-9 description").val(localStorage.getItem("hour-9"));
$("#hour-10 description").val(localStorage.getItem("hour-10"));
$("#hour-11 description").val(localStorage.getItem("hour-11"));
$("#hour-12 description").val(localStorage.getItem("hour-12"));
$("#hour-1 description").val(localStorage.getItem("hour-1"));
$("#hour-2 description").val(localStorage.getItem("hour-2"));
$("#hour-3 description").val(localStorage.getItem("hour-3"));
$("#hour-4 description").val(localStorage.getItem("hour-4"));
$("#hour-5 description").val(localStorage.getItem("hour-5"));
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// renderMessage();
// console.log((localStorage.getItem("input")));



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

