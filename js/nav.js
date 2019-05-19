var path = window.location.pathname;
var page = path.split("/").pop();


$(function(){
	$("#nav-placeholder").load("nav.html");
});

var newWin = window.open("nav.html");
newWin.onload = function(){
	var nav = newWin.document.getElementById('navbar-id');
	var htmlPageName = document.getElementById(page);
	$(nav).find(".active").removeClass("active");
	$(htmlPageName).parent().addClass("active");
};