$j=jQuery;
$j.noConflict();
$j(document).ready(function() {
    // slideshow with play/pause
    var slideShow = $j('.playPauseExample').slideShow({
	interval: 5
    });
    // now add logic to play/pause button
    $j('.playPauseExample a.togglePlayback').click(function() {
	if (slideShow.isPlaying()) {
	    $j(this).html('Play');
	} else {
	    $j(this).html('Stop');
	}
	slideShow.togglePlayback();
	return false;
    });
    
    $j('.playPauseExample a.page').click(function() {
	if (slideShow.isPlaying()) {} else {
	    $j('.playPauseExample a.togglePlayback').html('Stop');
	}
	return false;
    });
    
    $j('.banner').hover(function(){$j(this).find('h3').animate({left:'30'},100,'easeInCirc').animate({left:'-50'},10,'easeInCirc').animate({left:'0'},400,'easeOutBounce');
				   $j(this).find('span').animate({left:'50'},100,'easeInCirc').animate({left:'-5'},10,'easeInCirc').animate({left:'0'},400,'easeOutBounce');
				   $j(this).find('strong').animate({left:'50'},100,'easeInCirc').animate({left:'-20'},10,'easeInCirc').animate({left:'0'},400,'easeOutBounce');},function(){});
    
});