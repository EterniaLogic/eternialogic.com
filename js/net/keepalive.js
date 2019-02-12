// Keepalive management
// (C) EterniaLogic (Brent Clancy) 2016



function doKeepalive(){
	Ajax("GET",Server+"/keepalive",function (data){
		server_online = true;
		site_server.style.display = "none";
	},function(){
		server_online = false;
		site_server.style.display = "default";
		site_server.style.right = "100px";
		site_Server.innerHTML = "aaa";
	});
}


doKeepalive();
setInterval("doKeepalive();", 60000); // sleep 60 seconds