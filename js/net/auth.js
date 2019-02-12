// Authentication Handler
// (C) EterniaLogic (Brent Clancy) 2016

// Manages Authentication for clients

// Auth vars
Token = ""; // getCookie("token");
Username = ""; // getCookie("username");


// Send an auth request
function sendAuth(username,pass){
	// prehash password to the server
	// even though this is technically "open-source", cant hurt to put a salt on it
	pass = Sha256.hash("3ESVYpGFkl"+pass+"R7wGBgvu"); 
}

