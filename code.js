$(document).ready(

    function () {

        $("button").click(message)

    }

);

function message(event) {

    event.preventDefault();

    let firstName = $("input#first-name").val();

    let lastName = $("input#last-name").val();

    let rank = $("input[name=rank]:checked").val();

    let colors = $("input[name=rank]:checked").data("color");

    $("p#message").text(`Hello ${rank} ${firstName} ${lastName}. Welcome back!`);

    $("p#message").css("color", colors);







}