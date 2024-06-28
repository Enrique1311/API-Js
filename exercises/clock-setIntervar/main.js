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
