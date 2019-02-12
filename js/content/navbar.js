// Navbar management/draw file
// (C) EterniaLogic (Brent Clancy) 2016

//Ajax("GET","css/main.css", function(data){ alert(data); });

NavSelected = "home";

// Add a DOM link
function addDOMNavLink(location, name){
	var selected = NavSelected==location;
	var sela = selected ? "[" : "";
	var selb = selected ? "]" : "";
	
	
	// add children
	var elem = document.createElement("a");
	elem.addEventListener("click",function(){ clickNav(location); });
	elem.addEventListener("mouseover",function(thist){ console.log(thist); });
	elem.style.cursor = "pointer";
	elem.innerHTML = sela+name+selb;
	
	if(selected) elem.className="selectedNav";
	else elem.className="NavItem";
	
	var preElem = document.createElement("span");
	preElem.innerHTML = "&nbsp;&nbsp;";
	
	site_navbar.appendChild(preElem);
	site_navbar.appendChild(elem);
}

// load the nav bar
function doLoadNav(data){
	// clear out the navbar
	site_navbar.innerHTML = ""; 
	
	addDOMNavLink("home", "Home");
	addDOMNavLink("servers", "Servers");
	addDOMNavLink("projects", "Projects");
	addDOMNavLink("gallery", "Gallery");
	addDOMNavLink("tools", "Tools");
	addDOMNavLink("about", "About");
}

// Ask the server what to do for the navbar
function loadNav(){
	Ajax("GET",Server+"/content/navbar", doLoadNav);
}

// Reload the nav from cookies, if nil, then just goto home
function reloadNav(){
	NavSelected = getCookie("page");
	if(NavSelected == "") NavSelected = "home";
	
	clickNav(NavSelected);
}

// Click a nav location
function clickNav(location){
	NavSelected = location;
	setCookie("page",location, 10); // save the current page for 10 minutes
	doLoadNav(); // reload the nav bar
	
	switch(location){
		case "home":
				loadContent("page/home.htm");
			break;
		case "servers":
				loadContent("page/servers.htm");
			break;
		case "projects":
				loadContent("page/projects.htm");
			break;
		case "gallery":
				loadContent("page/gallery.htm");
			break;
		case "tools":
				loadContent("page/tools.htm");
			break;
		case "about":
				loadContent("page/about.htm");
			break;
		
		default:
				site_content.innerHTML="";
			break;
	}
}