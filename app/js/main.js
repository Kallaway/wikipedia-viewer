"use strict";

// TODO On focus on search box - empty the input
// Put button on the same line
// Make results appear one by one

function handleJSONP(data) {
	let results = data.query.search;
	buildResults(results);
	console.log("Real information: ", data.query.search);
};

function buildResults(data) {
	let timeoutIncr = 100;

	function urlSpaceReplacer() {
		return "_";
	}

		data.forEach(function(result) {
			setTimeout(function() {
				console.log(result);

				let urlQuery = result.title;
				let spaceRegex = /\s/gi;
				console.log("urlQuery in the beginning: " + urlQuery);
				urlQuery = urlQuery.replace(spaceRegex, urlSpaceReplacer);
				console.log("urlQuery: " + urlQuery);

				let urlForLink = "https://en.wikipedia.org/wiki/" + urlQuery;

				let resultsBox = $('#results');
				let container = $('<div></div>').addClass('entry');
				let link = $('<a></a>').addClass('res-link').attr({
						'href': urlForLink,
						'target': '_blank'
					});
				let resTitle = $('<h3></h3>').addClass('res-title').html(result.title);
				let resText = $('<p></p>').addClass('res-info').html(result.snippet + "...");
				console.log(result.snippet);
				console.log(resText);

				// let test = $
				link.append(resTitle);
				link.append(resText);
				container.append(link);
				resultsBox.append(container);
				}, timeoutIncr);
			timeoutIncr += 100;
		});



}

$(document).ready(function(){

	// constants
	const $resultsEl = $('#results'),
	$searchBox = $('#search-box'),
	$searchButton = $('#search-button'),
	urlStart = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=",
	urlEnd = "&format=json&callback=handleJSONP";

	function performSearch() {
		$('.entry').remove();

		console.log("Click event happened on the main button.");
		let searchText = $searchBox.val();
		let requestedURL = urlStart + searchText + urlEnd;


		var script = document.createElement("script");
		script.src = requestedURL;
		 // appendChild is calling the function
		document.body.appendChild(script);
	}

	$searchBox.on('keypress', function(e) {
		if (e.keyCode === 13) {
			performSearch();
		}
	});

	$searchButton.on('click', function(){
		performSearch();
	});

	var test = 3;
	console.log(test);


});
