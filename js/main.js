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
		countComplete = $('.completed').length;
		$('#mobile-counter > #counter').text(countComplete);
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
	
	
	/****************************************************
	 Event handler for calculate button
	 ****************************************************/
	var countComplete = 0;
	var resultsArray = [];
	resultsArray[0] = "";
	
	$('#calculate-button').click(function() {
		
		countComplete = $('.completed').length;
		
		$('#inner-count-container').animate({opacity: 0}, 'slow', function() {
        	$('#inner-count-container').empty();
        	var str = '<div class="results-text"><span id="counter">'+countComplete+'</span> of 116 Columbia traditions completed</div>';
  			$('#inner-count-container').append(str);
  			
  			var customMessage;
  			if(countComplete==0) {
  				customMessage = 'You don\'t even go here.';
  			}
  			else if(countComplete<=10) {
  				customMessage = '"Firs\'-years over here!" — Rubeus Hagrid';
  			}
  			else if(countComplete<=20) {
  				customMessage = 'You\'re a Lion cub. You\'re learning, you\'re growing, you\'re seeing the world.';
  			}
  			else if(countComplete<=30) {
  				customMessage = '';
  			}
  			else if(countComplete<=40) {
  				customMessage = 'You\'re PrezBo or DSpar (take your pick). You make appearances at a few big events each year, but are mostly absent from student life.';
  			}
  			else if(countComplete<=57) {
  				customMessage = 'You\'re Columbia football head coach Pete Mangurian. You’re trying, but you just haven’t gotten to .500.';
  			}
  			else if(countComplete==58) {
  				customMessage = 'You\'re at exactly 50 percent, the mean score on the orgo final.';
  			}
  			else if(countComplete<=71) {
  				customMessage = 'You\'re Roar-ee. You’re very involved in campus life.';
  			}
  			else if(countComplete<=89) {
  				customMessage = 'You\'re an overachiever. You’re that kid who reads all the books and does all the work, even though the lower grade the professor will give is a B+ anyway. Serious props for getting this far.';
  			}
  			else if(countComplete<=105) {
  				customMessage = 'You\'re either Jerry Sherwin or Wm. Theodore de Bary. You’ve been here forever and you\'ve done basically everything.';
  			}
  			else if(countComplete<=116) {
  				customMessage = 'Congratulations! You\'re the second coming of Alma Mater. You bleed Light Blue and can\'t help but break out into the Columbia fight song several times a day.';
  			}
  			
  			
  			$('#custom-message-text').text(customMessage);
  			
  			// var message = "I have completed "+countComplete+" of 116 Columbia traditions";

  			if($('#calculate-button').text()!="Recalculate Count") {
  				$('#calculate-button').text("Recalculate Count");
  			}
  			
        	$('#inner-count-container').animate({opacity: 1}, 'slow');
  		});
		
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
	var longid = "#featured-"+id;
	
	var TraditionObj = FeaturedTraditionMap[id];
	
	// FOR LOOP TURNS OFF THE selected-trad-number class from the other icons
	for (object in FeaturedTraditionMap) {
		var idcheck = "#featured-"+object;
		if ($(idcheck).hasClass('selected-trad-number')) {
			$(idcheck).toggleClass('selected-trad-number');
		}
	};
	
	$(longid).toggleClass('selected-trad-number');
	
	
	// If there's a video, display a video
	if(TraditionObj.videoCheck) {
		switchVideo('#featured-photo',TraditionObj);
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
	
	// sets currentIndex to the index corresponding to the tradition being displayed
	currentIndex = $.inArray(TraditionObj.number,indexArray);
});


// Event handler for all the tradition number icons in the featured box
$('.featured-trad-number').click(function() {
	var id = $(this).attr("id");
	// Because the ID of the featured icons doesn't match the ID of the elements in the checklist or the data, must modify it
	id = id.replace("featured-no","no");
	
	var TraditionObj = FeaturedTraditionMap[id];
	
	// FOR LOOP TURNS OFF THE selected-trad-number class from the other icons
	for (object in FeaturedTraditionMap) {
		var idcheck = "#featured-"+object;
		if ($(idcheck).hasClass('selected-trad-number')) {
			$(idcheck).toggleClass('selected-trad-number');
		}
	};
	
	// TURNS ON THE selected-trad-number class for the icon that was clicked
	$(this).toggleClass('selected-trad-number');
	
	// If there's a video, display a video
	if(TraditionObj.videoCheck) {
		switchVideo('#featured-photo',TraditionObj);
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
	
	// sets currentIndex to the index corresponding to the tradition being displayed
	currentIndex = $.inArray(TraditionObj.number,indexArray);
	
	// Scrolls to the corresponding tradition in the checklist
	id = "#"+id;
	$(".traditions-container").mCustomScrollbar("scrollTo",id);
	
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
  
  $('.featured-link').prop("href", link);

};


// Function to switch featured video
function switchVideo(container,TraditionObj) {
  
  var videoURL = TraditionObj.videoURL;
  var width = $(container).width();
  // var height = width/16*9; DON'T NEED TO DO THIS
  var height = $(container).height();
  
  // Use .animate to fade out from the old image/video, then change the background-image, add video, and fade in
  $(container).animate({opacity: 0}, 'slow', function() {
        $(container).empty();
  		$(container).css('background-image','');
  		//APPEND THE VIDEO
  		$(container).append('<iframe width="'+width+'" height="'+height+'" src="'+videoURL+'" frameborder="0" allowfullscreen></iframe>');
        $(container).animate({opacity: 1}, 'slow');
  });

};


// Set the initial content of the featured div
function setFeature(currentIndex,indexArray) {
	var id = "no-"+indexArray[currentIndex];
	var idlong = "#featured-"+id;
	
	var TraditionObj = FeaturedTraditionMap[id];
	
	// FOR LOOP TURNS OFF THE selected-trad-number class from the other icons
	for (object in FeaturedTraditionMap) {
		var idcheck = "#featured-"+object;
		if ($(idcheck).hasClass('selected-trad-number')) {
			$(idcheck).toggleClass('selected-trad-number');
		}
	};
	
	$(idlong).toggleClass('selected-trad-number');
	
	// If there's a video, display a video
	if(TraditionObj.videoCheck) {
		switchVideo('#featured-photo',TraditionObj);
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
	
	// Scrolls to the corresponding tradition in the checklist
	id = "#"+id;
	$(".traditions-container").mCustomScrollbar("scrollTo",id);
};


/****************************************************
 * All the data for the featured traditions that will show up in Featured Traditions box 
 ****************************************************/

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

var tradition20 = {
	'index':2,
	'number':20,
	'description':'The Varsity Show, a full-length musical put on by students at the end of every spring semester since 1984, is one of Columbia\'s longest ongoing traditions.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/nehB0yW3iUc?rel=0',
	'link':''
};

var tradition26 = {
	'index':3,
	'number':26,
	'description':'During the 2013-14 school year, student activism centered around Columbia\'s sexual assault policy. One of the most visible events was a freeze mob on College walk in November 2013 during which students held signs like the one pictured here.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/title9_file.jpg',
	'photoCredit': 'Kiera Wood / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/tags/sexual-assault'
};

var tradition27 = {
	'index':4,
	'number':27,
	'description':'In Spring 2014, the controversial decision by the Barnard administration to remove a Students for Justice in Palestine banner led to a series of protests and counterprotests by pro-Israeli and pro-Palestinian student groups on College Walk.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/SJPbanner_chan_1.jpg',
	'photoCredit': 'Justin Chan / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/news/2014/03/11/students-justice-palestine-banner-removal-sparks-debate-free-speech-display-policy'
};

var tradition37 = {
	'index':5,
	'number':37,
	'description':'In the 2013-14 school year, Columbia sports teams took home five Ivy League championships. If Baker Athletics Complex is too far, check out the sports like basketball and volleyball that play on campus.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/roaree%20high%20five.png',
	'photoCredit': 'Illustration by Christina Tang',
	'videoURL':'',
	'link':'http://columbiaspectator.com/sports'
};


var tradition44 = {
	'index':6,
	'number':44,
	'description':'The stained glass windows, the flying buttresses, the beauitful view from the roof ... ther vertical tour of St. John the Divine will be the best part of Art Hum, as long as you\'re not afraid of the heights.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/StJohns.jpg',
	'photoCredit': 'Justin Chan / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/tags/saint-john-divine'
};

var tradition47 = {
	'index':7,
	'number':47,
	'description':'In April 2012, Daniel Radcliffe came to campus to film scenes of "Kill Your Darlings," a Sony Pictures Classics movie about Columbia\'s famed Beat writers. Radcliffe, pictured here on Low Plaza in costume, portrayed Allen Ginsberg in the film.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/Brann_Radcliffe-20120405.jpg',
	'photoCredit': 'David Brann / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/2013/10/18/kill-your-darlings-rediscovering-columbias-bohemians'
};

var tradition56 = {
	'index':8,
	'number':56,
	'description':'Orgo Night is a semesterly event held by the Columbia University Marching Band that happens in Butler 209 at midnight on the first Friday of finals.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/5lRAk9no4_0',
	'link':'http://columbiaspectator.com/2014/05/08/orgo-night-live-blog'
};

var tradition57 = {
	'index':9,
	'number':57,
	'description':'Started at Barnard in 1978, Take Back the Night aims to create a safe space for sexual assault survivors and to promote discussion about sexual violence on college campuses.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/TBTNFromAbove_Kessel-lessYellow-WEB.jpg',
	'photoCredit': 'File Photo',
	'videoURL':'',
	'link':'http://columbiaspectator.com/tags/take-back-night'
};

var tradition62 = {
	'index':10,
	'number':62,
	'description':'Whenever a big snowstorm hits, Facebook events for snowball fights on South Lawn are bound to appear. During one such snowball fight in January 2014, a CNN reporter was caught in the crossfire on live television.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'http://www.cnn.com/video/api/embed.html#/video/bestoftv/2014/01/22/ac-carroll-snowball-fight.cnn',
	'link':'http://spectrum.columbiaspectator.com/spectrum/on-the-art-of-reporting-amidst-a-snowball-fight-and-other-news'
};

var tradition77 = {
	'index':11,
	'number':77,
	'description':'Bacchanal is a free spring concert that takes place on Low Plaza. Some of the more popular headliners in recent years include Snoop Dogg, Macklemore, and Wiz Khalifa.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/WeQujjh4B_o?rel=0',
	'link':'http://columbiaspectator.com/tags/bacchanal'
};

var tradition93 = {
	'index':12,
	'number':93,
	'description':'When Homecoming rolls around in October, show some school spirit and take the free shuttle or the 1 Train up to Baker Athletics Complex, at Broadway and 218th Street. Don\'t know much about sports? That\'s OK. Neither do the people in this video.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/3g5L-gVjPP4',
	'link':'http://spectrum.columbiaspectator.com/sports/what-do-columbia-students-know-about-our-football-team-not-much'
};


var tradition100 = {
	'index':13,
	'number':100,
	'description':'Every winter, College Walk is illuminated by the glow of lights hung on the campus\'s trees. At the end of November or the beginning of December, students come together for the festive Tree Lighting and Yule Log ceremonies.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/I_UB4ETgSM8',
	'link':'http://columbiaspectator.com/tags/tree-lighting-ceremony'
};

var tradition116 = {
	'index':14,
	'number':116,
	'description':'Every May, Low Plaza and South Lawn fill up with light blue robes and eager friends and family for the University Commencement ceremony.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/IMG_0711.jpg',
	'photoCredit': 'Steven Lau / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/2014/05/19/commencement-2014'
};

FeaturedTraditionMap['no-7'] = new FeaturedTraditionMap.FeaturedTradition(tradition7);
FeaturedTraditionMap['no-15'] = new FeaturedTraditionMap.FeaturedTradition(tradition15);
FeaturedTraditionMap['no-20'] = new FeaturedTraditionMap.FeaturedTradition(tradition20);
FeaturedTraditionMap['no-26'] = new FeaturedTraditionMap.FeaturedTradition(tradition26);
FeaturedTraditionMap['no-27'] = new FeaturedTraditionMap.FeaturedTradition(tradition27);
FeaturedTraditionMap['no-37'] = new FeaturedTraditionMap.FeaturedTradition(tradition37);
FeaturedTraditionMap['no-44'] = new FeaturedTraditionMap.FeaturedTradition(tradition44);
FeaturedTraditionMap['no-47'] = new FeaturedTraditionMap.FeaturedTradition(tradition47);
FeaturedTraditionMap['no-56'] = new FeaturedTraditionMap.FeaturedTradition(tradition56);
FeaturedTraditionMap['no-57'] = new FeaturedTraditionMap.FeaturedTradition(tradition57);
FeaturedTraditionMap['no-62'] = new FeaturedTraditionMap.FeaturedTradition(tradition62);
FeaturedTraditionMap['no-77'] = new FeaturedTraditionMap.FeaturedTradition(tradition77);
FeaturedTraditionMap['no-93'] = new FeaturedTraditionMap.FeaturedTradition(tradition93);
FeaturedTraditionMap['no-100'] = new FeaturedTraditionMap.FeaturedTradition(tradition100);
FeaturedTraditionMap['no-116'] = new FeaturedTraditionMap.FeaturedTradition(tradition116);



/****************************************************
 * Set the initial featured tradition 
 ****************************************************/
var currentIndex = Math.floor(Math.random() * 15);
var indexArray = [7, 15, 20, 26, 27, 37, 44, 47, 56, 57, 62, 77, 93, 100, 116];
setFeature(currentIndex,indexArray);


/****************************************************
 * Code for previous and next buttons 
 ****************************************************/
$('#previous').click(function() {
	if (currentIndex!=0) {
		currentIndex = currentIndex - 1;
		setFeature(currentIndex,indexArray);
	}
	
	// if the currentIndex is 0, nothing happens
});

$('#next').click(function() {
	if (currentIndex!=(indexArray.length - 1)) {
		currentIndex = currentIndex + 1;
		setFeature(currentIndex,indexArray);
	}
	
	// if the currentIndex is the last element in the array, nothing happens  
});


