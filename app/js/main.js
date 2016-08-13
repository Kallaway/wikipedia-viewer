"use strict";
function handleJSONP(data) {
	let results = data.query.search;
	//buildResults(results);
	console.log("Real information: ", data.query.search);
};


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
