// Cookies management script
// (C) EterniaLogic (Brent Clancy) 2016


function testCookieValue(val,name){
	var val = val.split("="); // split up again
	var xname = val[0];
	var xvalue = val[1];
	
	if(xname == name){
		return xvalue; // get out of here!
	}
	
	return "";
}

// return a value for a specific cookie
function getCookie(name){
	var cookies = document.cookie;
	
	if(cookies == "") return "";
	
	// Split up if has multiple cookies
	if(cookies.indexOf(";") > -1){
		cookies = cookies.replace("; ",";"); // remove trailing spaces
		cookies = cookies.split(";");
	}
	
	// loop through value pairs
	if(cookies instanceof Array){
		for(var i=0;i<cookies.length;i++){
			var val = testCookieValue(cookies[i],name); // value tested
		
			if(val != "") return val;
		}
	}else{
		var val = testCookieValue(cookies,name); // value tested
		
		if(val != "") return val;
		
	}
	
	return ""; // no value!
}


// Set a cookie with a lifespan based in minutes
function setCookie(name, value, minutelife){
	var d = new Date();
	d.setTime(d.getTime()+(minutelife*60*1000));
	
	document.cookie = name+"="+value+"; expires="+d.toUTCString();
}