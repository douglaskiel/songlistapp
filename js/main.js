$(document).ready(function() {
	//the vunction after the click event
	//is called an anonymous function No NAME
	$('#add').on("click", function(){
		//.val is getting user input from the input field
		var song = $("#song").val();

		//build a string that will become html
		var insertedSongName = "<li>" + song + "</li>";
		//take our insertedSongName string and append
		// it to the DOM
		$("#song-list").append(insertedSongName);
		// .val("") is the way to clear the field 
		// better user interface (UI)
		$("#song").val("");
	});
});