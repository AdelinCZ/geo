get_geo_position();
function on_success(position){
document.getElementById("latitude").innerHTML = "Latitude =" + position.coords.latitude;
document.getElementById("longitude").innerHTML = "Longitude =" + position.coords.longitude;
document.getElementById("acc").innerHTML = "Accuracy =" + position.coords.accuracy;
document.getElementById("altitude").innerHTML = "Altitude =" + position.coords.altitude;
var latlon = position.coord.latitude + "," + position.coords.longitude;
var   img_url  = "https://maps.googleapis.com/maps/api/staticamp?center="+latlon+"&zoom=14&size=300x300&key=AIzaSyDIni3W4Lj1K6n9aKppUSGC1mBIWxPQCig";
}
function on_error(e)
{
document.getElementById("text").innerHTML=e.message;
}
var geo_params= { enableHighAccuracy:true,
timeout:1000,
maximumAge:0
};
function get_geo_position()
{
var geo=navigator.geolocation;
geo.getCurrentPosition(on_success, on_error, geo_params)
}