// JavaScript Document
function deviceinfo(){
	$('#dispo table td').eq(1).text(device.name);
	$('#dispo table td').eq(3).text(device.phonegap);
	$('#dispo table td').eq(5).text(device.plataform);
	$('#dispo table td').eq(7).text(device.version);
	$('#dispo table td').eq(9).text(device.uuid);
}
$(document).ready(function(){
	deviceinfo();
	document.addEventListener("deviceready",function(){
	deviceinfo()
	},false);
});