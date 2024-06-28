// watchPosition
const $location = document.querySelector(".location");
console.log($location);

let reqcount = 0;

const errorCallback = (err) => {};

const successCallback = (pos) => {
	const { accuracy, latitude, longitude, altitude, speed } = pos.coords;
	reqcount++;

	$location.innerHTML = `Accuracy: ${accuracy}<br/>`;
	$location.innerHTML += `Latitude: ${latitude}<br/>`;
	$location.innerHTML += `Longitude: ${longitude}<br/>`;
	$location.innerHTML += `Altitude: ${altitude}<br/>`;
	$location.innerHTML += `Speed: ${speed}<br/>`;
	$location.innerHTML += `reqcount: ${reqcount}<br/>`;
};

const options = {
	enableHighAccuracy: true,
	timeOut: 5000,
	maximunAge: 0,
};

const watchPos = navigator.geolocation.watchPosition(
	successCallback,
	errorCallback,
	options
);

// clearWatch // Stop watching the position
const $stopBtn = document.querySelector(".stop-btn");

$stopBtn.addEventListener("click", () => {
	navigator.geolocation.clearWatch(watchPos);
	alert("The geolocation position has been stoped!");
});
