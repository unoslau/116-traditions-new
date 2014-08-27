$(document).ready(function() {
	Traditions= {};
	Traditions.message= "How many of Columbia's 116 traditions have you completed? What's left to check off your list? Use the Columbia Daily Spectator's interactive 116 traditions feature to find out.";
	Traditions.count=null;
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
      Calculate message function
	 ****************************************************/

	
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
  			else if(countComplete<=5) {
  				customMessage = '"Firs\'-years over here!" — Rubeus Hagrid';
  			}
  			else if(countComplete<=10) {
  				customMessage = '1020 is your bar of choice and you think Tom\'s has THE best brunch.';
  			}
  			else if(countComplete<=20) {
  				customMessage = 'You\'re the kid inside studying during Bacchanal.';
  			}
  			else if(countComplete<=30) {
  				customMessage = 'You\'re on your way to being the overachiever your mom always knew you were. Meow, Baby Lion, meow.';
  			}
  			else if(countComplete<=40) {
  				customMessage = 'You\'re PrezBo or DSpar (take your pick). You make appearances at a few big events each year, but are mostly absent from student life.';
  			}
  			else if(countComplete<=57) {
  				customMessage = 'You\'re Columbia football head coach Pete Mangurian. You’re trying, but you just haven’t gotten to .500.';
  			}
  			else if(countComplete==58) {
  				customMessage = 'You\'re at exactly 50 percent—just like the mean score on the orgo final.';
  			}
  			else if(countComplete<=71) {
  				customMessage = 'You haven\'t left the confines of 110th and 120th streets since NSOP and Roar-ee is your spirit animal.';
  			}
  			else if(countComplete<=89) {
  				customMessage = 'You\'re a tour guide, a TA, and an RA. When you have time to breathe, you spend it playing “disc” on the lawn and and writing the drafts of the keynote commencement speech you\'re bound to give in 15 years.';
  			}
  			else if(countComplete<=105) {
  				customMessage = 'Your life goals include becoming a Columbia admissions officer and visiting all of the University\'s global centers. At least 75% of your Instagram posts are of campus, Columbia acronyms are your second language, and your friends know you as "The Walking WikiCU."';
  			}
  			else if(countComplete<=116) {
  				customMessage = 'Congratulations! You\'re the second coming of Alma Mater. You bleed Light Blue, all of your pants are pastel colored, and you jog Riverside Park while humming Columbia\'s fight song.';
  			}
  			Traditions.message=customMessage;
  			Traditions.count=countComplete;
  			
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
  		// $(container).text(TraditionObj.description);
  		$(container).append('<div>'+TraditionObj.description+'</div>');
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

/*
var tradition3 = {
	'index':0,
	'number':3,
	'description':'Tensions between Barnard and Columbia\'s other three undergraduate schools came to a head in 2012 when the decision of President Barack Obama, CC \'83, to speak at Barnard commencement <a href="http://columbiaspectator.com/news/2012/05/06/2011-12-review-obamas-decision-speak-barnard-creates-rift-bumps-gs-class-day">sparked hundreds of misogynistic online comments on Bwog and Spectator that targeted Barnard students</a>.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/obama_1.jpg',
	'photoCredit': 'File Photo',
	'videoURL':'',
	'link':'http://columbiaspectator.com/news/2012/05/06/2011-12-review-obamas-decision-speak-barnard-creates-rift-bumps-gs-class-day',
};
*/

var tradition7 = {
	'index':0,
	'number':7,
	'description':'Tom\'s Restaurant, located on the corner of Broadway and 112th Street, is famous for being used as the exterior of Monk\'s Cafe in "Seinfeld".',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/Tom%27s%20Colour%20Horizontal.jpg',
	'photoCredit': 'File Photo',
	'videoURL':'',
	'link':'http://columbiaspectator.com/tags/toms-restaurant',
};

var tradition15 = {
	'index':1,
	'number':15,
	'description':'Vampire Weekend consists of four Columbia graduates, including lead singer and guitarist Ezra Koenig, CC \'06, <a href="http://columbiaspectator.com/2014/06/07/photos-governors-ball-2014-jack-white-outkast-strokes-wow-crowds">pictured here at the 2014 Governor\'s Ball Music Festival</a>. Vampire Weekend also performed at <a href="https://www.flickr.com/photos/thatgreenplant/sets/72157617007861726/detail/">Columbia\'s 2009 Bacchanal</a>.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/DSC_0361.jpg',
	'photoCredit': 'Natalie Moore / Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/2014/06/07/photos-governors-ball-2014-jack-white-outkast-strokes-wow-crowds'
};

var tradition20 = {
	'index':2,
	'number':20,
	'description':'The Varsity Show, a full-length musical put on by students at the end of every spring semester since 1894, is <a href="http://www.thevarsityshow.com/">one of Columbia\'s longest ongoing traditions</a>.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/nehB0yW3iUc?rel=0',
	'link':''
};

var tradition26 = {
	'index':3,
	'number':26,
	'description':'During the 2013-14 school year, student activism centered around <a href="http://columbiaspectator.com/tags/sexual-assault">Columbia\'s sexual assault policy</a>. One of the most visible events was <a href="http://columbiaspectator.com/multimedia/2013/11/20/title-ix-team-organizes-anti-sexual-violence-freeze-mob">a freeze mob on College walk</a> in November 2013, during which students held signs like the one pictured here.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/title9_file.jpg',
	'photoCredit': 'Kiera Wood / Senior Staff Photographer',
	'videoURL':'',
	'link':''
};

var tradition27 = {
	'index':4,
	'number':27,
	'description':'In Spring 2014, <a href="http://columbiaspectator.com/news/2014/03/11/students-justice-palestine-banner-removal-sparks-debate-free-speech-display-policy">the controversial decision by the Barnard administration to remove a Students for Justice in Palestine banner</a> led to a series of protests and counterprotests by pro-Israeli and pro-Palestinian student groups on College Walk.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/SJPbanner_chan_1.jpg',
	'photoCredit': 'Justin Chan / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/news/2014/03/11/students-justice-palestine-banner-removal-sparks-debate-free-speech-display-policy'
};

var tradition37 = {
	'index':5,
	'number':37,
	'description':'In the 2013-14 school year, Columbia sports teams took home five Ivy League championships. If Baker Athletics Complex is too far, check out the sports like <a href="http://columbiaspectator.com/sports/2014/05/11/yir-2013-14-mens-basketball-capped-historic-season-postseason-run">basketball</a> and <a href="http://columbiaspectator.com/sports/volleyball">volleyball</a> that play on campus.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/roaree%20high%20five%20cropped.png',
	'photoCredit': 'Illustration by Christina Tang',
	'videoURL':'',
	'link':'http://columbiaspectator.com/sports'
};

var tradition44 = {
	'index':6,
	'number':44,
	'description':'The stained glass windows, the flying buttresses, and the beauitful view from the roof will make <a href="http://columbiaspectator.com/tags/saint-john-divine">the vertical tour of St. John the Divine</a> the best part of Art Hum, as long as you\'re not afraid of heights.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/StJohns.jpg',
	'photoCredit': 'Justin Chan / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/tags/saint-john-divine'
};

var tradition45 = {
	'index':7,
	'number':45,
	'description':'40s on 40 is an annual, unofficial celebration typically held 40 days before Commencement, during which <a href="http://columbiaspectator.com/news/2014/04/10/seniors-gather-40s-40-42-days-commencement">seniors gather on Low Steps to drink and reminisce</a>.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/40s-on-40s3-WEB.jpg',
	'photoCredit': 'David Brann / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/2013/04/22/seniors-reflect-time-cu-friends-40s',
};

var tradition47 = {
	'index':8,
	'number':47,
	'description':'In April 2012, <a href="http://columbiaspectator.com/2013/10/18/kill-your-darlings-rediscovering-columbias-bohemians">Daniel Radcliffe came to campus to film scenes of "Kill Your Darlings,"</a> a Sony Pictures Classics movie about Columbia\'s famed <a href="http://www.wikicu.com/Beat_Generation">Beat writers</a>. Radcliffe, pictured here on Low Plaza in costume, portrayed Allen Ginsberg in the film.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/Brann_Radcliffe-20120405.jpg',
	'photoCredit': 'David Brann / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/2013/10/18/kill-your-darlings-rediscovering-columbias-bohemians'
};

var tradition56 = {
	'index':9,
	'number':56,
	'description':'<a href="http://columbiaspectator.com/2014/05/08/orgo-night-live-blog">Orgo Night</a> is a semesterly event held by the <a href="http://www.wikicu.com/Columbia_University_Marching_Band">Columbia University Marching Band</a> in <a href="http://www.wikicu.com/Butler_209">Butler 209</a> at midnight on the first Friday of finals. The band tells jokes about campus happenings and plays songs to along with its performance.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/5lRAk9no4_0',
	'link':''
};

var tradition57 = {
	'index':10,
	'number':57,
	'description':'Started at Barnard in 1978, <a href="http://columbiaspectator.com/tags/take-back-night">Take Back the Night</a> aims to create a safe space for sexual assault survivors and to promote discussion about sexual violence on college campuses.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/TBTNFromAbove_Kessel-lessYellow-WEB.jpg',
	'photoCredit': 'File Photo',
	'videoURL':'',
	'link':'http://columbiaspectator.com/tags/take-back-night'
};

var tradition61 = {
	'index':11,
	'number':62,
	'description':'The World Leaders Forum is an annual series of events held in Low Rotunda, where global thought leaders and heads of state, like Chilean President Sebastián Piñera (pictured), are invited to speak to and engage with students.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/Chile_Qu_WEB.jpg',
	'photoCredit': 'Jing Qu for Spectator',
	'videoURL':'',
	'link':''
};

var tradition62 = {
	'index':12,
	'number':62,
	'description':'Whenever a big snowstorm hits, Facebook events for snowball fights on South Lawn are bound to appear. During one such snowball fight in January 2014, <a href="http://www.huffingtonpost.com/2014/01/22/reporter-snowballs-cnn-cold-weather_n_4644719.html">a CNN reporter was caught in the crossfire on live television</a>.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'http://www.cnn.com/video/api/embed.html#/video/bestoftv/2014/01/22/ac-carroll-snowball-fight.cnn',
	'link':''
};

var tradition67 = {
	'index':13,
	'number':67,
	'description':'There\'s something special about Carman. Just ask the guys who made <a href="http://columbiaspectator.com/2011/03/30/carman-forever">the "Carman Forever" music video</a>.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/WqFlf6SsYJw?rel=0',
	'link':''
};

var tradition71 = {
	'index':14,
	'number':67,
	'description': 'During Bacchanal 2013, Katie Furr (aka Fountain Girl), CC \'14, rose to fame by <a href="http://columbiaspectator.com/2013/04/15/katie-furr-fountain-girl-delivering-splashes-masses">climbing into the upper part of the Low Plaza fountain and splashing water on the crowd</a>. Public Safety waited patiently for her to finish before taking her away.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//player.vimeo.com/video/64003784?byline=0&amp;portrait=0&amp;color=6699cc&amp;loop=1',
	'link':''
};

var tradition77 = {
	'index':15,
	'number':77,
	'description':'<a href="http://columbiaspectator.com/tags/bacchanal">Bacchanal</a> is a free spring concert that takes place on Low Plaza. Some of the more popular headliners in recent years include Snoop Dogg, Macklemore, Wiz Khalifa, and Lupe Fiasco.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/WeQujjh4B_o?rel=0',
	'link':''
};

var tradition88 = {
	'index':16,
	'number':88,
	'description':'In addition to being one of the most popular economics lecturers at Columbia, <a href="http://columbiaspectator.com/tag/sunil-gulati">Sunil Gulati</a> is also the president of the United States Soccer Federadtion and a member of the FIFA Executive Committee. If you still don\'t think he\'s cool, watch his Ice Bucket Challenge video.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/EmxcqjQ5rIw?rel=0',
	'link':''
};

var tradition93 = {
	'index':17,
	'number':93,
	'description':'When <a href="http://columbiaspectator.com/orientation-2014-fall-sports-calendar">Homecoming rolls around in October</a>, show some school spirit and take the free shuttle or the 1 Train up to Baker Athletics Complex, at Broadway and 218th Street. Don\'t know much about sports? That\'s OK. <a href="http://columbiaspectator.com/2012/10/21/what-do-columbia-students-know-about-our-football-team">Neither do the people in this video</a>.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/3g5L-gVjPP4',
	'link':''
};


var tradition100 = {
	'index':18,
	'number':100,
	'description':'Every winter, College Walk is illuminated by the glow of lights hung on the campus\'s trees. At the end of November or the beginning of December, students come together for the festive <a href="http://columbiaspectator.com/tags/tree-lighting-ceremony">Tree Lighting and Yule Log ceremonies</a>.',
	'videoCheck':true,
	'photoURL':'',
	'photoCredit': '',
	'videoURL':'//www.youtube.com/embed/I_UB4ETgSM8',
	'link':''
};

var tradition116 = {
	'index':19,
	'number':116,
	'description':'Every May, <a href="http://columbiaspectator.com/2014/05/21/slideshow-columbia-university-commencement-2014">Low Plaza and South Lawn fill up with light blue robes</a> and eager friends and family for the <a href="http://columbiaspectator.com/2014/05/19/commencement-2014">University Commencement</a> ceremony.',
	'videoCheck':false,
	'photoURL':'http://columbiaspectator.com/sites/default/files/IMG_0711.jpg',
	'photoCredit': 'Steven Lau / Senior Staff Photographer',
	'videoURL':'',
	'link':'http://columbiaspectator.com/2014/05/19/commencement-2014'
};

// FeaturedTraditionMap['no-3'] = new FeaturedTraditionMap.FeaturedTradition(tradition3);
FeaturedTraditionMap['no-7'] = new FeaturedTraditionMap.FeaturedTradition(tradition7);
FeaturedTraditionMap['no-15'] = new FeaturedTraditionMap.FeaturedTradition(tradition15);
FeaturedTraditionMap['no-20'] = new FeaturedTraditionMap.FeaturedTradition(tradition20);
FeaturedTraditionMap['no-26'] = new FeaturedTraditionMap.FeaturedTradition(tradition26);
FeaturedTraditionMap['no-27'] = new FeaturedTraditionMap.FeaturedTradition(tradition27);
FeaturedTraditionMap['no-37'] = new FeaturedTraditionMap.FeaturedTradition(tradition37);
FeaturedTraditionMap['no-44'] = new FeaturedTraditionMap.FeaturedTradition(tradition44);
FeaturedTraditionMap['no-45'] = new FeaturedTraditionMap.FeaturedTradition(tradition45);
FeaturedTraditionMap['no-47'] = new FeaturedTraditionMap.FeaturedTradition(tradition47);
FeaturedTraditionMap['no-56'] = new FeaturedTraditionMap.FeaturedTradition(tradition56);
FeaturedTraditionMap['no-57'] = new FeaturedTraditionMap.FeaturedTradition(tradition57);
FeaturedTraditionMap['no-61'] = new FeaturedTraditionMap.FeaturedTradition(tradition61);
FeaturedTraditionMap['no-62'] = new FeaturedTraditionMap.FeaturedTradition(tradition62);
FeaturedTraditionMap['no-67'] = new FeaturedTraditionMap.FeaturedTradition(tradition67);
FeaturedTraditionMap['no-71'] = new FeaturedTraditionMap.FeaturedTradition(tradition71);
FeaturedTraditionMap['no-77'] = new FeaturedTraditionMap.FeaturedTradition(tradition77);
FeaturedTraditionMap['no-88'] = new FeaturedTraditionMap.FeaturedTradition(tradition88);
FeaturedTraditionMap['no-93'] = new FeaturedTraditionMap.FeaturedTradition(tradition93);
FeaturedTraditionMap['no-100'] = new FeaturedTraditionMap.FeaturedTradition(tradition100);
FeaturedTraditionMap['no-116'] = new FeaturedTraditionMap.FeaturedTradition(tradition116);



/****************************************************
 * Set the initial featured tradition 
 ****************************************************/
var currentIndex = Math.floor(Math.random() * 20);
var indexArray = [7, 15, 20, 26, 27, 37, 44, 45, 47, 56, 57, 61, 62, 67, 71, 77, 88, 93, 100, 116];
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

/****************************************************
 * Code for Facebook sharing
 ****************************************************/

document.getElementById('facebookButton').onclick = function() {
	var name;
	var description = Traditions.message;
	var picture = "http://sandbox.columbiaspectator.com/features/orientation-2014-interactive-116-traditions/img/116_trad_graphic.jpg";
	var link = 'http://sandbox.columbiaspectator.com/features/orientation-2014-interactive-116-traditions/';
	if (Traditions.count == null){
		name= "116 Traditions";
	}
	else {
		name= "You've completed "+ Traditions.count+ " traditions! | 116 Traditions";
	}

	FB.ui(
	 {
	  method: 'feed',
	  link: link,
	  name: name,
	  description: description,
	  picture: picture
	}, function(response){});
}
