var dayDate = moment();
$("#currentDay").text(dayDate.format("dddd, MMMM Do YYYY h:mm:ss a"));   


var input = $(this).siblings(".form-control").val();
//Make row color green if in future, red if current and grey if past

// if (dayDate = "some moment code");
// //current red
//     then $("some jquery code to style color red")

$(".saveBtn").on("click", function(){
    //gets the value of user input
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("hour");

    localStorage.setItem("input" , input);
    localStorage.setItem("hour" , hour);

});
var input = localStorage.getItem("form-control");


if ((moment().format("h")) > 9 ){
    $("hour-9").css("background-color", "gray");
} else if ((moment().format("h")) < 9){
    $("hour-9").css("background-color" , "green");
} else if ((moment().format("h")) == 9){
    $("hour-9").css("background-color", "red");
}else{
    alert("Error");
}


// function timeColor(){
//     //access data-number to change color of time blocks when
//     //past, present, future
// }



// $("#text-9").val(localStorage.getItem("hour-9"));
// $("#text-10").val(localStorage.getItem("hour-10"));
// $("#text-11").val(localStorage.getItem("hour-11"));
// $("#text-12").val(localStorage.getItem("hour-12"));
// $("#text-1").val(localStorage.getItem("hour-1"));
// $("#text-2").val(localStorage.getItem("hour-2"));
// $("#text-3").val(localStorage.getItem("hour-3"));
// $("#text-4").val(localStorage.getItem("hour-4"));
// $("#text-5").val(localStorage.getItem("hour-5"));










// function renderMessage(){
//     input = JSON.parse(localStorage.getItem("input"));
// }
// renderMessage();


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