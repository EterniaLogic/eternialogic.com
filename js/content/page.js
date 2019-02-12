// Manages memory caching for webpages
// (C) EterniaLogic (Brent Clancy) 2016

var pagecache = {};


function loadContent(location){
	// Precaching
	if(pagecache[location] == undefined){ 
		Ajax("GET",location, function(data){ 
			site_content.innerHTML=data;
			pagecache[location] = data;
		});
	}else{ // Fully cached page content
		site_content.innerHTML = pagecache[location];
	}
}


