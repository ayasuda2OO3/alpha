$(document).ready(function() {
	function formatText(index, panel) {
	  return index + "";
	}
  $(function () {

		
		$('.anythingSlider2').anythingSlider({
			 easing: "easeInCirc",                // Anything other than "linear" or "swing" requires the easing plugin
			 autoPlay: false,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not.
			 delay: 6000,                    // How long between slide transitions in AutoPlay mode
			 startStopped: false,            // If autoPlay is on, this can force it to start stopped
			 animationTime: 1000,             // How long the slide transition takes
			 hashTags: true,                 // Should links change the hashtag in the URL?
			 buildNavigation: false,         // If true, builds and list of anchor links to link to each slide
			 pauseOnHover: false,             // If true, and autoPlay is enabled, the show will pause on hover
			 startText: "",              // Start text
			 stopText: "",               // Stop text
		  navigationFormatter: formatText   // Details at the top of the file on this use (advanced use)
		});

		$("#slide-jump").click(function(){
			 $('.anythingSlider').anythingSlider(6);
		});

  });
   
 });