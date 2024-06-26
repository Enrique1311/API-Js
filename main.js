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

// Clock (exercise)
const addZero = (num) => {
	if (num.toString().length < 2) {
		return "0".concat(num);
	}
	return num;
};

const getHour = () => {
	const time = new Date();
	let hour = addZero(time.getHours());
	let min = addZero(time.getMinutes());
	let sec = addZero(time.getSeconds());

	document.querySelector(".hour").textContent = hour;
	document.querySelector(".min").textContent = min;
	document.querySelector(".sec").textContent = sec;
};

getHour();

setInterval(() => {
	getHour();
}, 1000);
