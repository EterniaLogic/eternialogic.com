// Main Javascript file
// (C) EterniaLogic (Brent Clancy) 2016


site_header =  null;
site_navbar =  null;
site_content = null;
site_footer =  null;
site_server =  null;
server_online = false; // used later in server.js, if false then fall to a basic layout



// Ajax do an operation via ajax with asynchronous functionality via tmethod(repsonse)
function Ajax(method, location, tmethod, failmethod=undefined){
	try{
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				if(typeof tmethod === "function"){
					tmethod(xhttp.responseText);
				}
			}else if(xhttp.status == 404){
				if(typeof failmethod === "function"){
					failmethod();
				}
			}
		};
		xhttp.open(method, location, true);
		xhttp.send();
	}catch(e){
		console.log("Ajax('"+method+"', '"+location+"') Error: "+e.message);
	}
}

// load a javascript file
function loadJSFile(loc){
	var elem = document.createElement("script");
	elem.type = "application/javascript";
	elem.async = true;
	elem.defer = true;
	elem.src = loc;
	
	document.body.appendChild(elem);
}

var waiters = [];
// Wait for a function to be available.
function whenAvailable(name,vars="") {
    var interval = 10; // ms
    waiters[waiters.length] = window.setInterval("if(typeof "+name+" === 'function'){ "+name+"("+vars+"); clearInterval(waiters["+waiters.length+"]); }", 
												 interval);
}

function detectmobile() { 
	if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) return true;
	
	return false;
}

function computerCSS(){
	// <link rel="stylesheet" type="text/css" href="css/main.css" />
	var elem = document.createElement("link");
	elem.rel = "stylesheet";
	elem.type = "text/css";
	elem.href= "css/main.css";
	document.head.appendChild(elem);
}

function mobileCSS(){
	// <link rel="stylesheet" type="text/css" href="css/mobile.css" />
	var elem = document.createElement("link");
	elem.rel = "stylesheet";
	elem.type = "text/css";
	elem.href= "css/mobile.css";
	document.head.appendChild(elem);
}


// called body
// onload="if(typeof loadjs === 'function') loadjs();"
function loadjs(){
	site_header =  document.getElementById("headerbox");
	site_navbar =  document.getElementById("navbox");
	site_content = document.getElementById("contentbox");
	site_footer =  document.getElementById("footerbox");
	site_server =  document.getElementById("serverbox");
	
	// Detect mobile for CSS
	if(detectmobile()) mobileCSS();
	else computerCSS()
	
	
	// load up javascript files
	
	// Primary Handlers
	loadJSFile("js/lib/hash/sha256.js"); // Main authentication handlers
	loadJSFile("js/lib/cookies.js"); // Main authentication handlers
	loadJSFile("js/lib/JSON.js"); // Main authentication handlers
	loadJSFile("js/net/server.js"); // Communicate with the server, detect if it is disconnected
	loadJSFile("js/net/auth.js"); // Main authentication handlers
	
	// Animation & Drawing
	loadJSFile("js/lib/draw.js"); // Drawing stuffs, HTML5 extended
	loadJSFile("js/lib/anim.js"); // Animation
	loadJSFile("js/content/navbar.js"); // Navbar management & drawing
	loadJSFile("js/content/page.js"); // Navbar management & drawing
	
	loadJSFile("js/net/keepalive.js"); // Keepalive module, includes reloading cookies every now and then
	
	whenAvailable("doLoadNav"); // wait until doLoadNav is available and loaded
	whenAvailable("reloadNav"); // load the current page on reload
}

// load the other JS files
loadjs();


// Google (C) Rights reserved
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-67689101-3', 'auto');ga('send', 'pageview');