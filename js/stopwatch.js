$(document).ready (function() {

	function addLeadingZero(val) {
		if (val < 10) {
			return '0' + val;
		} else {
			return val;
		}
	};

	var interval;

	$('.start').on('click', function() {

		var startTime = new Date();

		interval = setInterval(function() {

			// Get new time

			var newTime = new Date();

			// Compute elapsed time

			var elapsedTime = new Date(newTime - startTime);

			// Display it

			var seconds = elapsedTime.getSeconds();
			var minutes = elapsedTime.getMinutes();

			seconds = addLeadingZero(seconds);
			minutes = addLeadingZero(minutes);

			$('.minutes').text(minutes);
			$('.seconds').text(seconds);

		}, 1000);
	});

	$('.stop').on('click', function() {
		clearInterval(interval);
	});

	$('.reset').on('click', function() {
		$('.seconds').text('00');
		$('.minutes').text('00');
	});

});