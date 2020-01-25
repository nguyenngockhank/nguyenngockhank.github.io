
var TabController = function(){
	var instance = {};
  
	function refreshItem() {
	  var type = $('.item-tab.active').data('type');
	  // console.log('>>>> click here', type)
	  ContentController.render(type);
	}
  
	instance.init = function() {
	  // build DOM
	  var tabNavEl = document.getElementById('tab-nav');
	  _.each(ICON_OPTIONS, function(iconOption, key) {
		tabNavEl.innerHTML += '<li class="item-tab" data-type="' + key + '">' + key.capitalize()  + '</li>';
	  });
  
	  // add events
	  $('.item-tab').click(function(e) {
		var hasActive = $('.item-tab.active').length > 0;
  
		if (!hasActive) {
		  $(this).addClass('active');
		} else {
		  var currentActive = $(this).hasClass('active');
  
		  if (currentActive) {
			$(this).removeClass('active');
		  } else {
			$('.item-tab.active').removeClass('active');
			$(this).addClass('active');
		  }
		}
		
		refreshItem();
	  });
	}
	return instance;
  }();
  
  
  var ContentController = function() {
	var instance = {};
  
	var timelineCon = document.getElementById('timeline-container');
	var itemTemplate = _.template(document.getElementById('itemTemplate').innerHTML);
	
	instance.init = function () {
	  instance.render();
	}
  
  
	instance.render = function (type) {
	  var renderItems = dataItems;
  
	  // filter items before render
	  if (type) {
		var renderItems = _.filter(dataItems, function(item) {
		  return item.type === type;
		});
	  }
  
	  timelineCon.innerHTML = '';
  
	  // build content
	  _.each(renderItems, function(item) {
  
		item.dateUI = format_date_ui( new Date(item.date));
  
		// add item 
		var html = itemTemplate(item);
		timelineCon.innerHTML += html;
	  });
  
	  // VerticalTimeline.hideBlocks();
  
	  AnimationController.start();
	}
  
	return instance;
}();
  

function VerticalTimeline( element ) {
	this.element = element;
	this.blocks = this.element.getElementsByClassName("cd-timeline__block");
	this.images = this.element.getElementsByClassName("cd-timeline__img");
	this.contents = this.element.getElementsByClassName("cd-timeline__content");
	this.offset = 0.8;
	this.hideBlocks();
};

VerticalTimeline.prototype.hideBlocks = function() {
	if ( !"classList" in document.documentElement ) {
		return; // no animation on older browsers
	}
	//hide timeline blocks which are outside the viewport
	var self = this;
	for( var i = 0; i < this.blocks.length; i++) {
		(function(i){
			if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
				self.images[i].classList.add("cd-timeline__img--hidden"); 
				self.contents[i].classList.add("cd-timeline__content--hidden"); 
			}
		})(i);
	}
};

VerticalTimeline.prototype.showBlocks = function() {
	if ( ! "classList" in document.documentElement ) {
		return;
	}
	var self = this;
	for( var i = 0; i < this.blocks.length; i++) {
		(function(i){
			if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
				// add bounce-in animation
				self.images[i].classList.add("cd-timeline__img--bounce-in");
				self.contents[i].classList.add("cd-timeline__content--bounce-in");
				self.images[i].classList.remove("cd-timeline__img--hidden");
				self.contents[i].classList.remove("cd-timeline__content--hidden");
			}
		})(i);
	}
};


var AnimationController = function() {
	var instance = {};

	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
			verticalTimelinesArray = [],
			scrolling = false;

	function checkTimelineScroll() {
		verticalTimelinesArray.forEach(function(timeline){
			timeline.showBlocks();
		});
		scrolling = false;
	};

	function processScroll(event) {
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
		}
	}

	instance.start = function() {
		// reset
		verticalTimelinesArray = [];

		// add again
		if( verticalTimelines.length > 0 ) {
			for( var i = 0; i < verticalTimelines.length; i++) {
				(function(i){
					verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
				})(i);
			}

			window.removeEventListener('scroll', processScroll);

			//show timeline blocks on scrolling
			window.addEventListener("scroll", processScroll);
		}
	}

	return instance;
}();

(function(){
  // Vertical Timeline - by CodyHouse.co
  	TabController.init();
  	ContentController.init();
  	AnimationController.start();
})();