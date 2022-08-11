// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the momFactArray)
	var number = Math.floor((Math.random() * momFactArray.length));
	// We display the fact from the momFactArray that is in the random position we just generated.
	$("#factText").text(momFactArray[number])
})

// This array holds all of our Mom facts!
var momFactArray = ["Mom will use your full, Christian name to indicate that you are in danger", "For raising both Nick and Ben, Mom has been nominated for the Congressional Medal of Honor", "Some folks call her \"GamGam\"...", "Some say she hasn't eaten a warm meal in decades."]

// When the textPink button is pressed...
$("#textPink").on("click", function() {
	// Change funText to pink.
	$("#funText").css("color", "pink")
})

// When the textOrange button is pressed...
$("#textorange").on("click", function() {
	// Change funText to orange.
	$("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	// Change funText to green.
	$("#funText").css("color", "green")
})


// When the boxGrow button is clicked... 
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})