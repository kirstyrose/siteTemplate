MAIN = (function ($) {

	init = function () {
		// Code here runs straight away

		var lat,
			lng;
		$(DOMready);

		var mapObject = document.getElementById("google-map");

		if (mapObject) {

			function loadScript() {
			  var script = document.createElement('script');
			  script.type = 'text/javascript';
			  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +'callback=maps';
			  document.body.appendChild(script);
			}

			window.onload = loadScript;

		}

	},

	DOMready = function () {

		// Code here runs when the DOM is ready
		imager();
		forms();

	};

	imager = function() {
		new Imager('.js-load-img', {
			//availableWidths: [360, 480, 600, 800, 1024],
			lazyload: true
		});
	};

	forms = function() {

		// Form Wrapping, change any to false that you don't want.

		window.slick = new slickForms({

			select : true,
			checkbox : true,
			radio : true,
			file: true

		});

		// Example form settings updates

		// $('#random-form-selector').propForm('updateSettings', {

		// 	wrapper : '.field-wrap',
		// 	tooltip : true,
		// 	compare : true,
		// 	errorClass : 'error',
		// 	ajax : true
		// 	pending : null,
		// 	success : null

		// });

	}

	maps = function() {

		var lat = $('#google-map').data('lat');
		var lng = $('#google-map').data('lng');

		var latlng = new google.maps.LatLng(lat, lng);
		var myOptions = {
			zoom: 14,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("google-map"),
				myOptions);

		var image = new google.maps.MarkerImage('/assets/img/map-icon.png',
			// This marker is 20 pixels wide by 32 pixels tall.
			new google.maps.Size(40, 57),
			// The origin for this image is 0,0.
			new google.maps.Point(0, 0),
			// The anchor for this image is the base of the flagpole at 0,32.
			new google.maps.Point(20, 56));

		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			icon: image
		});

	}

	return {
		start : init
	};


})(jQuery);

MAIN.start();
