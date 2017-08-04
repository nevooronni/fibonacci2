//custom javasctipt 

//back-end

var loop = function() {

}

//front-end
$(document).ready(function() {
	$("submit-btn").click(function(event) {
		event.preventDefault();
		var userInput = parseInt($("#number-input").val());
		var resultOfArray = loop(userInput);
		$("#").text();
		$("#").slideToggle();
		$("#").slideToggle();
	});
});