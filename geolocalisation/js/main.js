var output = document.getElementById("out");

function success(position) {
var latitude  = position.coords.latitude;
var longitude = position.coords.longitude;

output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

var iframe = document.createElement("iframe");
iframe.src = "https://www.bing.com/maps/embed?h=400&w=500&cp=" + latitude + "~" + longitude + "&lvl=12&typ=d&sty=r&src=SHELL&FORM=MBEDV8";

output.appendChild(iframe);
}

function error() {
output.innerHTML = "Unable to retrieve your location";
}

output.innerHTML = "<p>Locating…</p>";

navigator.geolocation.getCurrentPosition(success, error);

