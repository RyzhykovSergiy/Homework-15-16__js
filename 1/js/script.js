$(document).ready(function() {

		$(".btn-search").on('click', function() {
				seerchMy();
		});

		$('.input-search').keypress(function(e) {
				if (e.which == 13) {
					event.preventDefault();
					seerchMy();
				}
		});

		function seerchMy() {

			var searchMyInput = $('.input-search').val();
			 var URL = "https://pixabay.com/api/?key=" + '4341489-c7135f07e924eb271481ce96f' + "&q=" + encodeURIComponent(searchMyInput);
				$.getJSON(URL, function(data) {
					console.log(URL);
						$('.conclusion-search').empty();
						data.hits.splice(16);
						if (parseInt(data.totalHits) > 0)
								$.each(data.hits, function(i, hit) {
										$('.conclusion-search').append('<div class="col-md-3 col-sm-6"><a href="' + hit.pageURL + '"><img src="' + hit.previewURL + '"></a></div>');
								});
						else
								$('.conclusion-search').append('<p>Простите, мы не смогли найти совпадений.</p>');
				});
		}


});

