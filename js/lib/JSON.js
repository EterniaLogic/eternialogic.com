// JSON API
// (C) EterniaLogic (Brent Clancy) 2016

// Handle JSON parsing
function parseJSON(value){
	try{
		return JSON.parse(value);
	}catch(e){
		console.log("parseJSON error: "+e.message);
		return false; // error occured
	}
}