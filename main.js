// Date() object
// ************************
const newDate = new Date();
console.log(newDate);

console.log(Date.now()); // In milliseconds

console.log("Date of the month:" + newDate.getDate());

console.log("Day of the week: " + newDate.getDay());

console.log("Month: " + newDate.getMonth());

console.log("Year: " + newDate.getYear()); // the year - 1900

console.log("Full Year: " + newDate.getFullYear());

console.log("Hour: " + newDate.getHours());

console.log("Minutes: " + newDate.getMinutes());

console.log("Seconds: " + newDate.getSeconds());

//**************************************************************************************************************

// localStorage()
//**************************

// setItem() - Asign the value of the localStorage
localStorage.setItem("name", "Enrique");
console.log(localStorage);

// getItem() - Get the value of the localStorage
console.log(localStorage.getItem("name"));

let myName = localStorage.getItem("name");
console.log(`Variable which contain name of the localStorage: ${myName}`);

// removeItem() - Remove an item of the localStorage
setTimeout(() => {
	localStorage.removeItem("name");
}, 2000);

// clear() - Clear all the values of the localStorage
// setTimeout(() => {
// 	localStorage.clear();
// }, 2000);

//**************************************************************************************************************

// sessionStorage()
//**************************
sessionStorage.setItem("name", "Javier");

let otherName = sessionStorage.getItem("name");
console.log(otherName);

// ****************************************************************************************************

// Drag and Drop (dragstart, drag & dragend events)
// ********************************************************

const $circle = document.querySelector(".circle");
const $container = document.querySelector(".container");

$circle.addEventListener("dragstart", (e) => {
	console.log("dragstart");
	console.log(e.dataTransfer);
	e.dataTransfer.setData("myClass", e.target.className); // It is convenient to work with id
});

// $circle.addEventListener("drag", () => {
// 	console.log("drag");
// });

// $circle.addEventListener("dragend", () => {
// 	console.log("dragend");
// });

// (dragenter, dragover, drop & dragleave)
$container.addEventListener("dragenter", () => {
	console.log("dragenter");
});

$container.addEventListener("dragover", () => {
	e.preventDefault(); // prevent default allows the drop event to be actived on the element
	console.log("dragover");
});

$container.addEventListener("drop", (e) => {
	console.log("drop");
	console.log(e.dataTransfer.getData("myClass"));
});

$container.addEventListener("dragleave", () => {
	console.log("dragleave");
});

// **************************************************************************************************

// Geolocation API
// *********************************

const geolocat = navigator.geolocation;
console.log(geolocat);

// getCurrentPosition
const position = (pos) => {
	console.log(pos);
	console.log(pos.coords);
	console.log(pos.coords.latitude);
	console.log(pos.coords.longitude);
};

const err = () => {
	console.log(e);
};

const options = {
	maximumAge: 0, // the time of actualisation
	timeOut: 3000, // the time the app will be waiting to show the information
	enableHighAccuracy: true, // active the high presition to find the location
};

geolocat.getCurrentPosition(position, err, options);

// watchPosition()
const watchPosition = navigator.geolocation.watchPosition((pos) => {
	const { latitude, longitude } = pos.coords;

	console.log(`Watching latitude ${latitude} and longitude ${longitude}`);
	console.log(`Wath Position: ${watchPosition}`);
});

watchPosition();
