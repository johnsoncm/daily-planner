
//Set current day, date, and time in jumbotron
var dayDate = moment();
$("#currentDay").text(dayDate.format("dddd, MMMM Do YYYY h:mm:ss a"));   




function renderMessage(){
    input = JSON.parse(localStorage.getItem("input"));
    if(!localStorage.getItem('input')){
        $window.localStorage.setItem('input' , JSON.stringify($scope.initData));
        var inputDescription = document.querySelector("description")
        inputDescription.textContent = input
    }
}




$(".saveBtn").on("click", function(){
    //gets the value of user input
    var input = $(this).siblings(".form-control").val();
    
    localStorage.setItem("input" , input);
    
});
// var input = localStorage.getItem("form-control");

// function renderInput(){


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