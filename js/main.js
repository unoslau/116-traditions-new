$(document).ready(function() {
	
	/****************************************************
	 Code snippets for drop-down selector
	 ****************************************************/
	
	// Create an array of numbers 1 to 116
	var tradition_numbers = new Array(116);
	for	(var index = 0; index < tradition_numbers.length; index++) {
    	tradition_numbers[index] = index+1;
	}
	
	// Populate the #tradition-dropdown select element
	for(element in tradition_numbers)
	{
   		// create an option
   		var opt = document.createElement("option");
   		opt.value= tradition_numbers[element];
   		opt.innerHTML = tradition_numbers[element];

		// append the option to the select element
   		$('#tradition-dropdown').append(opt);
	}
	
	// Event handler for drop down
	$('#tradition-dropdown').change(function(){
		var selected_id = "#no-"+$("select option:selected").text();
		$(".traditions-container").mCustomScrollbar("scrollTo",selected_id);
	});
	
	
	
	/****************************************************
	 Event handler for marking traditions as completed
	 ****************************************************/
	$('.trad-number').on('click', function() {
		$(this).toggleClass('checkmark');
		$(this).parent().toggleClass('completed');
	});
	
	
	/****************************************************
	 Event handlers for filter buttons
	 ****************************************************/
	
	//Only show traditions that are finished
	document.getElementById('finished-button').addEventListener('click',function(e){
    	
    	// If only the unfinished traditions are showing...
    	if($('#unfinished-button').hasClass('button-selected')) {
    		// Toggle the hidden class for all traditions
    		$('.tradition').toggleClass('hidden');
    		// unselect the unfinished button
    		$('#unfinished-button').toggleClass('button-selected');
    		// select the all button
    		$(this).toggleClass('button-selected');
    	}
    	
    	// If all the traditions are showing...
    	else if ($('#all-button').hasClass('button-selected')) {
    		// Hide the finished traditions, then toggle all traditions hidden class
    		$('.completed').toggleClass('hidden');
    		$('.tradition').toggleClass('hidden');
    		// unselect the all button
    		$('#all-button').toggleClass('button-selected');
    		// select the unfinished button
    		$(this).toggleClass('button-selected');
    	}
    	
    	// If the finished button is already selected, nothing happens.
    	
	}); 
	
	//Only show traditions that are unfinished
	document.getElementById('unfinished-button').addEventListener('click',function(e){
    	 
    	// If only the finished traditions are showing...
    	if ($('#finished-button').hasClass('button-selected')) {
    		// Toggle the hidden class for all traditions
    		$('.tradition').toggleClass('hidden');
    		// unselect the finished button
    		$('#finished-button').toggleClass('button-selected');
    		// select the unfinished button
    		$(this).toggleClass('button-selected');
    	}
    	
    	// If all the traditions are showing
    	else if ($('#all-button').hasClass('button-selected')) {
    		// Hide the finished traditions
    		$('.completed').toggleClass('hidden');
    		// unselect the all button
    		$('#all-button').toggleClass('button-selected');
    		// select the unfinished button
    		$(this).toggleClass('button-selected');
    	}
    	
    	// If the unifnished button is already selected, nothing happens
    	
	});
	
	//Show all traditions
	document.getElementById('all-button').addEventListener('click',function(e){
    	
    	// If only the unfinished traditions are showing...
    	if($('#unfinished-button').hasClass('button-selected')) {
    		// Toggle off the hidden class for the finished traditions
    		$('.completed').toggleClass('hidden');
    		// unselect the unfinished button
    		$('#unfinished-button').toggleClass('button-selected');
    		// select the all button
    		$(this).toggleClass('button-selected');
    	}
    	
    	// If only the finished traditions are showing...
    	else if ($('#finished-button').hasClass('button-selected')) {
    		// Hide the finished traditions, and then unhide all traditions
    		$('.completed').toggleClass('hidden');
    		$('.tradition').toggleClass('hidden');
    		// unselect the finished button
    		$('#finished-button').toggleClass('button-selected');
    		// select the all button
    		$(this).toggleClass('button-selected');
    	}
    	
    	// If the all button is already selected, nothing happens
	});
	
});


/****************************************************
 * Code for the featured traditions that will show up in Featured Traditions box 
 *
 ****************************************************/

var FeaturedTraditionMap = {};

// This function adds a tradition to FeaturedTraditionMap
FeaturedTraditionMap.FeaturedTradition = function(name) {
	this.number = name.number;
	this.description = name.description;
	this.videoCheck = name.videoCheck;
	this.photoURL = name.photoURL;
	this.videoURL = name.videoURL;
};


$('.featured-button').click(function() {
	var id = $(this).closest("div.tradition").attr("id");
	// switch the photo
	switchPhoto('#featured-photo-container',id);
	// switch the text
	
});


function switchPhoto(container,tradition) {
  var TraditionObj = FeaturedTraditionMap[tradition];
  var imagepath = "url("+TraditionObj.photoURL+")";
  
  // Use .animate to fade out from the old image, then change the background-image and fade it in
  $(container).animate({opacity: 0}, 'slow', function() {
        $(container).empty();
  		$(container).css('background-image',imagepath);
        $(container).animate({opacity: 1}, 'slow');
  });

};


// ALL THE DATA FOR THE FEATURED TRADITIONS

var tradition7 = {
	'number':7,
	'description':'Tom\'s Restaurant, located on the corner of Broadway and 112th Street, is famous for being used as the exterior of Monk\'s Cafe in "Seinfeld".',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/Tom%27s%20Colour%20Horizontal.jpg',
	'videoURL':""
};

var tradition15 = {
	'number':15,
	'description':'Vampire Weekend consists of four Columbia graduates, including lead singer and guitarist Ezra Koenig, CC \'06 and pictured here.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/DSC_0361.jpg',
	'videoURL':""
};

FeaturedTraditionMap['no-7'] = new FeaturedTraditionMap.FeaturedTradition(tradition7);
FeaturedTraditionMap['no-15'] = new FeaturedTraditionMap.FeaturedTradition(tradition15);

