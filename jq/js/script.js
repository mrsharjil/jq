// jQuery

$(document).ready(function() {
    // alert
    // alert("Please wait...");
    $("#alertBtn").click(function() {
alert("Hello! This is a jQuery alert!");
});

// text change
    $("#textChangeBtn").click(function() {
        $("#textBox").text("Text has been changed using jQuery!");
    });
    // Toggle Visibility
    $(document).ready(function() {
        $("#toggleBtn").click(function() {
            $("#toggleBox").toggle();
        });
    });

    // Fade in and out
    $(document).ready(function() {
        $("#fadeInBtn").click(function() {
            $("#fadeBox").fadeIn();
        });

        $("#fadeOutBtn").click(function() {
            $("#fadeBox").fadeOut();
        });
    
});
// Slide toggle effect
$(document).ready(function() {
    $("#slideBtn").click(function() {
        $("#slideBox").slideToggle();
    });
});
// add/remove class
$(document).ready(function() {
    $("#classBtn").click(function() {
        $("#classBox").toggleClass("highlight");
    });
});
// Changing image source on click
$(document).ready(function(){
    $("#imgChBtn").click(function(){
        $("#imgBox").attr("src", "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    });
});

$(document).ready(function() {
    $("#fetchDataBtn").click(function() {
        $.getJSON("https://jsonplaceholder.typicode.com/users/1", function(data) {
            $("#dataContainer").html("<b>Name:</b> " + data.name + "<br> <b>Email:</b> " + data.email);
        });
    });
});

// 
});

$(document).ready(function() {
    $("#hoverBox").hover(
        function() { $(this).css("background-color", "lightblue"); },
        function() { $(this).css("background-color", ""); }
    );

// append & prepend
$(document).ready(function(){
$("#appendBtn").click(function(){$("#appendText").append("<b>Appended!</b>"); });
$("#prependBtn").click(function() { $("#appendText").prepend("<b>Prepended!</b> "); });

});
});
// Blur Event
$("#blurInput").blur(function(){$("#blurMessage").text("You blurred the input!");});
// Double Click
$("#dblClickBtn").dblclick(function(){$("#dblClickMsg").text("Button was double-clicked");});
// Mouse Position
// $(document).mousemove(function(event){
//     $("#posX").text(event.pageX);
//     $("#posY").text(event.pageY);
// });
$(".card:has(#posX)").mousemove(function(event) {
    let offset = $(this).offset();
    let relativeX = event.pageX - offset.left;
    let relativeY = event.pageY - offset.top;
    
    $("#posX").text(relativeX);
    $("#posY").text(relativeY);
});
// focus and focusOut
$("#focusInput").focus(function(){$(this).css("background-color",
    "yellow");}); 

$("#focusInput").focusout(function(){$(this).css("background-color",
    "white");});
// scroll event
$(".card").scroll(function(){$("#scrollMsg").text("You scrolled!");});
// Show/Hide Answer
$("#showAnswerBtn").click(function(){
    $("#answer").show();
});
// Hid with Delay

$("#hideParaBtn").click(function(){
    $("#hidePara").delay(4000).fadeOut();
});
// 
$(document).ready(function () {
    
    //  Check Even or Odd
    $("#checkNumberBtn").click(function () {
        let number = $("#numberInput").val();
        if (number % 2 === 0) {
            $("#numberResult").text(number + " is Even").css("color", "green");
        } else {
            $("#numberResult").text(number + " is Odd").css("color", "red");
        }
    });
});
// Show Message Based on Selection
    $("#choiceSelect").change(function () {
        let choice = $(this).val();
        if (choice === "hello") {
            $("#choiceMessage").text("Hello! How are you?").css("color", "green");
        } else if (choice === "bye") {
            $("#choiceMessage").text("Goodbye! See you soon.").css("color", "red");
        } else {
            $("#choiceMessage").text("");
        }
    });
    // Simple Login Validation
    $("#loginBtn").click(function () {
        let username = $("#username").val();
        let password = $("#password").val();

        if (username === "admin" && password === "1234") {
            $("#loginMessage").text("Login successful!").css("color", "green");
        } else {
            $("#loginMessage").text("Invalid credentials!").css("color", "red");
        }
    });


