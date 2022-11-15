// Create variable that will store the date
var date = dayjs().format('dddd, MMMM D YYYY, h:mm:ss A');
// Write the date to the page
$("#day").html(date);
// Create function that will only run when website loads
$(document).ready(function () {
    // Add event listener for when user clicks on save button
    $(".saveBtn").on("click", function () {
        // Create variables that target the entry of data
        var content = $(this).siblings(".desc").val();
        var moment = $(this).parent().attr("id");
        // Store them in local storage
        localStorage.setItem(moment, content);
    })
   // Get items from local storage
   $("#period8 .desc").val(localStorage.getItem("period8"));
   $("#period9 .desc").val(localStorage.getItem("period9"));
   $("#period10 .desc").val(localStorage.getItem("period10"));
   $("#period11 .desc").val(localStorage.getItem("period11"));
   $("#period12 .desc").val(localStorage.getItem("period12"));
   $("#period1 .desc").val(localStorage.getItem("period1"));
   $("#period2 .desc").val(localStorage.getItem("period2"));
   $("#period3 .desc").val(localStorage.getItem("period3"));
   $("#period4 .desc").val(localStorage.getItem("period4"));
   $("#period5 .desc").val(localStorage.getItem("period5"));
    // Create function for changing background color
    function runTime() {
        // Assign hour of day to variable
        var localTime = dayjs().format("H");
        // Target the css class for each div
        $(".block").each(function () {
            var block = parseInt($(this).attr("id").split("period")[1]);
            // Use if statement to assign the class
            if (block < localTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (block == localTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");

            }
        })
    }

    runTime();
})