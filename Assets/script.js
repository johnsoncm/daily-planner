
// selects document we are currently in and executes function
$(document).ready(function () {
    //function executes when save button is clicked
    $(".saveBtn").on("click", function () {
        //gets the value of user input
        var time = $(this).parent().attr("id")
        var value = $(this).siblings(".description").val()
        //sets time and value to local storage
        localStorage.setItem(time, value);
        console.log(localStorage);
        $(".notification").addClass("show");
        setTimeout(function () {
            $(".notification").removeClass("show");
        }, 5000);
    })

    //identifies what hour currently in and executes function to change classes
    function hourUpdater() {
        var hour = moment().hours();
        $(".time-block").each(function () {
                 //parsing out the number from the hour-number id
            var currentTime = parseInt($(this).attr("id").split("-")[1]);
       
            //determines time of day with time block and changes class colors accordingly
            if (currentTime < hour) {
                $(this).addClass("past");
            } else if (currentTime === hour) {
                
                $(this).removeClass("past");
                $(this).addClass("present");
               
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
                
            }
        })
};
    hourUpdater();
    //Gets the saved input in local storage and displays in the description area
    var interval = setInterval(hourUpdater, 15000);
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});