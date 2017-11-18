$(document).ready(function(){
	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
	navigation: false,
	pagination: true,
	responsive:{
		0: {
			items: 1
		},
		800: {
			items: 2
		},
		1200:{items:3}
	},
	navigationText: false
	});

    /* Tooltips */
    $(function () {
	  // $('[data-toggle="tooltip"]').tooltip()
	})
   	
})


	/*---------------------------------------------------- */
	/* Intro background portfolio
	------------------------------------------------------ */

 $(window).on('load', function () {
	$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
	}

		var bImgs= [1,2,3,4,5,6,7,8].map(function(i){return '/assets/img/introbg/INTRO-BG-'+i+'.jpg'});
		$(bImgs).preload();

		var startId = Date.now();
		var delayInt = 4800;
		var currentImgId = null;

		function changeIntroImg(img){
		$("#intro-bg").fadeOut('slow', function () { 
			$("#intro-bg").css('backgroundImage','url('+ img +')');
			$('#intro-bg').fadeIn('slow');
		});
	}

	function getCurrentImg(){
		if (currentImgId === null || currentImgId === bImgs.length - 1){
			currentImgId = 0;
		} else {
			currentImgId++
		}
		return bImgs[currentImgId];
	}

	bImgs.forEach(function(item) {
		changeIntroImg(item);
	});

	function bgImgRotation(){
		if (Date.now() - startId >= delayInt){
			changeIntroImg(getCurrentImg());
			startId = Date.now();
		}
	}

	setInterval(bgImgRotation, 100)

	})

