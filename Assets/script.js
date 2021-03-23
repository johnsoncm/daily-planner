var dayDate = moment();
$("#currentDay").text(dayDate.format("dddd, MMMM Do YYYY"));   


//Make row color green if in future, red if current and grey if past

// if (dayDate = "some moment code");
// //current red
//     then $("some jquery code to style color red")

var saveButton = document.querySelector(".saveBtn");
saveButton.addEventListener("click", function () {
    //get user input
    //save to local storage

    var textArea = document.querySelector("description").value;

    localStorage.setItem("description" , textArea);
    
    
});

var inputTextArea = document.getElementById("col-md-10 description");
function displayData(){
    var textArea   = localStorage.getItem("col-md-10 description");

    
    
    textArea.textContent = inputTextArea;
  
};