"use strict";

function handleJSONP(data) {
	let results = data.query.search;
	buildResults(results);
	console.log("Real information: ", data.query.search);
};

function buildResults(data) {
	let timeoutIncr = 100;

	setTimeout(function() {
		data.forEach(function(result) {

			console.log(result);

			let resultsBox = $('#results');
			let container = $('<div></div>').addClass('entry');
			let link = $('<a></a>').addClass('res-link');
			let resTitle = $('<h3></h3>').addClass('res-title').html(result.title);
			let resText = $('<p></p>').addClass('res-info').html(result.snippet);
			console.log(result.snippet);
			console.log(resText);

			// let test = $
			link.append(resTitle);
			link.append(resText);
			container.append(link);
			resultsBox.append(container);

			timeoutIncr += 100;
		});
	}, timeoutIncr);


}



$(document).ready(function(){

	// constants
	const $resultsEl = $('#results'),
	$searchBox = $('#search-box'),
	$searchButton = $('#search-button'),
	urlStart = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=",
	urlEnd = "&format=json&callback=handleJSONP";



	$searchButton.on('click', function(){
		console.log("Click event happened on the main button.");
		let searchText = $searchBox.val();
		let requestedURL = urlStart + searchText + urlEnd;


		var script = document.createElement("script");
		script.src = requestedURL;
	     // appendChild is calling the function
	    document.body.appendChild(script);


	});

	var test = 3;
	console.log(test);


});
