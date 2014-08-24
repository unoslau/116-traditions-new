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

// Constructor for Featured Tradition object
FeaturedTraditionMap.FeaturedTradition = function(name) {
	this.index = name.index;
	this.number = name.number;
	this.description = name.description;
	this.videoCheck = name.videoCheck;
	this.photoURL = name.photoURL;
	this.photoCredit = name.photoCredit;
	this.videoURL = name.videoURL;
	this.link = name.link;
};


// Event handler for all the "Featured" buttons in the tradiions list
$('.featured-button').click(function() {
	var id = $(this).closest("div.tradition").attr("id");
	
	var TraditionObj = FeaturedTraditionMap[id];
	
	// If there's a video, display a video
	if(TraditionObj.videoCheck) {
		// switch video
		switchPhotoCredit('#featured-photo-credit',TraditionObj);
		switchDescription('#featured-text',TraditionObj);
		switchLink(TraditionObj);
	}
	// If there's not video, display the photo
	else {
		switchPhoto('#featured-photo',TraditionObj);
		switchPhotoCredit('#featured-photo-credit',TraditionObj);
		switchDescription('#featured-text',TraditionObj);
		switchLink(TraditionObj);
	}

});

// Event handler for all the tradition number icons in the featured box
$('.featured-trad-number').click(function() {
	var id = $(this).attr("id");
	// Because the ID of the featured icons doesn't match the ID of the elements in the checklist or the data, must modify it
	id = id.replace("featured-no","no");
	
	var TraditionObj = FeaturedTraditionMap[id];
	// If there's a video, display a video
	if(TraditionObj.videoCheck) {
		// switch video
		switchPhotoCredit('#featured-photo-credit',TraditionObj);
		switchDescription('#featured-text',TraditionObj);
		switchLink(TraditionObj);
	}
	// If there's not video, display the photo
	else {
		switchPhoto('#featured-photo',TraditionObj);
		switchPhotoCredit('#featured-photo-credit',TraditionObj);
		switchDescription('#featured-text',TraditionObj);
		switchLink(TraditionObj);
	}
	
});



// Function to switch featured photos. To be used by the event handlers.
function switchPhoto(container,TraditionObj) {

  var imagepath = "url("+TraditionObj.photoURL+")";
  
  // Use .animate to fade out from the old image, then change the background-image and fade it in
  $(container).animate({opacity: 0}, 'slow', function() {
        $(container).empty();
  		$(container).css('background-image',imagepath);
        $(container).animate({opacity: 1}, 'slow');
  });

};


// Function to switch featured photo credit. To be used by the event handlers.
function switchPhotoCredit(container,TraditionObj) {
    
  // Use .animate to fade out from the old image, then change the background-image and fade it in
  $(container).animate({opacity: 0}, 'slow', function() {
        $(container).empty();
  		$(container).text(TraditionObj.photoCredit);
        $(container).animate({opacity: 1}, 'slow');
  });
	
};


// Function to switch featured text. To be used by the event handlers.
function switchDescription(container,TraditionObj) {
  
  // Use .animate to fade out from the old image, then change the background-image and fade it in
  $(container).animate({opacity: 0}, 'slow', function() {
        $(container).empty();
  		$(container).text(TraditionObj.description);
        $(container).animate({opacity: 1}, 'slow');
  });

};


// Function to switch the link that wraps the featured photo and featured text
function switchLink(TraditionObj) {
  
  var link = TraditionObj.link; 
  
  $('#featured-photo').wrap('<a href="'+link+'"></a>');
  $('#featured-text').wrap('<a class="featured-link" href="'+link+'"></a>');

};


// Function to switch featured video
function switchVideo(container,TraditionObj) {
  
  // Use .animate to fade out from the old image, then change the background-image and fade it in
  $(container).animate({opacity: 0}, 'slow', function() {
        $(container).empty();
  		$(container).css('background-image',imagepath);
        $(container).animate({opacity: 1}, 'slow');
  });

};


// ALL THE DATA FOR THE FEATURED TRADITIONS

var tradition7 = {
	'index':0,
	'number':7,
	'description':'Tom\'s Restaurant, located on the corner of Broadway and 112th Street, is famous for being used as the exterior of Monk\'s Cafe in "Seinfeld".',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/Tom%27s%20Colour%20Horizontal.jpg',
	'photoCredit': 'File Photo',
	'videoURL':'',
	'link':'',
};

var tradition15 = {
	'index':1,
	'number':15,
	'description':'Vampire Weekend consists of four Columbia graduates, including lead singer and guitarist Ezra Koenig, CC \'06, pictured here at the 2014 Governor\'s Ball Music Festival. Vampire Weekend also performed at Columbia\'s 2009 Bacchanal.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/DSC_0361.jpg',
	'photoCredit': 'Natalie Moore / Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/2014/06/07/photos-governors-ball-2014-jack-white-outkast-strokes-wow-crowds'
};

var tradition17 = {
	'index':2,
	'number':17,
	'description':'',
	'videoCheck':false,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'',
	'link':''
};

var tradition20 = {
	'index':3,
	'number':20,
	'description':'',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'',
	'link':''
};

var tradition26 = {
	'index':4,
	'number':26,
	'description':'',
	'videoCheck':false,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'',
	'link':''
};

var tradition27 = {
	'index':5,
	'number':27,
	'description':'In Spring 2014, the controversial decision by the Barnard administration to remove a Students for Justice in Palestine banner led to a series of protests and counterprotests by pro-Israeli and pro-Palestinian student groups on College Walk.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/SJPbanner_chan_1.jpg',
	'photoCredit': 'Justin Chan / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/news/2014/03/11/students-justice-palestine-banner-removal-sparks-debate-free-speech-display-policy'
};

var tradition44 = {
	'index':6,
	'number':44,
	'description':'The stained glass windows, the flying buttresses, the beauitful view from the roo ... it\'ll be the best part of Art Hum, as long as you\'re not afraid of the heights.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/StJohns.jpg',
	'photoCredit': 'Justin Chan / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/tags/saint-john-divine'
};


FeaturedTraditionMap['no-7'] = new FeaturedTraditionMap.FeaturedTradition(tradition7);
FeaturedTraditionMap['no-15'] = new FeaturedTraditionMap.FeaturedTradition(tradition15);
FeaturedTraditionMap['no-17'] = new FeaturedTraditionMap.FeaturedTradition(tradition17);
FeaturedTraditionMap['no-20'] = new FeaturedTraditionMap.FeaturedTradition(tradition20);
FeaturedTraditionMap['no-26'] = new FeaturedTraditionMap.FeaturedTradition(tradition26);
FeaturedTraditionMap['no-27'] = new FeaturedTraditionMap.FeaturedTradition(tradition27);
FeaturedTraditionMap['no-44'] = new FeaturedTraditionMap.FeaturedTradition(tradition44);
