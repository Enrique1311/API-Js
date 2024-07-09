// // Date() object
// // ************************
// const newDate = new Date();
// console.log(newDate);

// console.log(Date.now()); // In milliseconds

// console.log("Date of the month:" + newDate.getDate());

// console.log("Day of the week: " + newDate.getDay());

// console.log("Month: " + newDate.getMonth());

// console.log("Year: " + newDate.getYear()); // the year - 1900

// console.log("Full Year: " + newDate.getFullYear());

// console.log("Hour: " + newDate.getHours());

// console.log("Minutes: " + newDate.getMinutes());

// console.log("Seconds: " + newDate.getSeconds());

// //**************************************************************************************************************

// // localStorage()
// //**************************

// // setItem() - Asign the value of the localStorage
// localStorage.setItem("name", "Enrique");
// console.log(localStorage);

// // getItem() - Get the value of the localStorage
// console.log(localStorage.getItem("name"));

// let myName = localStorage.getItem("name");
// console.log(`Variable which contain name of the localStorage: ${myName}`);

// // removeItem() - Remove an item of the localStorage
// setTimeout(() => {
// 	localStorage.removeItem("name");
// }, 2000);

// // clear() - Clear all the values of the localStorage
// // setTimeout(() => {
// // 	localStorage.clear();
// // }, 2000);

// //**************************************************************************************************************

// // sessionStorage()
// //**************************
// sessionStorage.setItem("name", "Javier");

// let otherName = sessionStorage.getItem("name");
// console.log(otherName);

// // ****************************************************************************************************

// // Drag and Drop (dragstart, drag & dragend events)
// // ********************************************************

// const $circle = document.querySelector(".circle");
// const $container = document.querySelector(".container");

// $circle.addEventListener("dragstart", (e) => {
// 	console.log("dragstart");
// 	console.log(e.dataTransfer);
// 	e.dataTransfer.setData("myClass", e.target.className); // It is convenient to work with id
// });

// // $circle.addEventListener("drag", () => {
// // 	console.log("drag");
// // });

// // $circle.addEventListener("dragend", () => {
// // 	console.log("dragend");
// // });

// // (dragenter, dragover, drop & dragleave)
// $container.addEventListener("dragenter", () => {
// 	console.log("dragenter");
// });

// $container.addEventListener("dragover", () => {
// 	e.preventDefault(); // prevent default allows the drop event to be actived on the element
// 	console.log("dragover");
// });

// $container.addEventListener("drop", (e) => {
// 	console.log("drop");
// 	console.log(e.dataTransfer.getData("myClass"));
// });

// $container.addEventListener("dragleave", () => {
// 	console.log("dragleave");
// });

// // **************************************************************************************************

// // Geolocation API
// // *********************************

// const geolocat = navigator.geolocation;
// console.log(geolocat);

// // getCurrentPosition
// const position = (pos) => {
// 	console.log(pos);
// 	console.log(pos.coords);
// 	console.log(pos.coords.latitude);
// 	console.log(pos.coords.longitude);
// };

// const err = () => {
// 	console.log(e);
// };

// const options = {
// 	maximumAge: 0, // the time of actualisation
// 	timeOut: 3000, // the time the app will be waiting to show the information
// 	enableHighAccuracy: true, // active the high presition to find the location
// };

// geolocat.getCurrentPosition(position, err, options);

// // watchPosition()
// const watchPosition = navigator.geolocation.watchPosition((pos) => {
// 	const { latitude, longitude } = pos.coords;

// 	console.log(`Watching latitude ${latitude} and longitude ${longitude}`);
// 	console.log(`Wath Position: ${watchPosition}`);
// });

// **********************************************************************************************

// history API
// ********************
console.log(history);
console.log(history.length);
// history.back();
// history.forward()
// history.go() or history(0) // reload the the page
// history.go(1) // to go to one next page
// history.go(-1) // to go to one previous page
console.log(location.href);

// **********************************************************************************************

// FileReader API
// ********************

// readAsText() ************************************
// const $file = document.querySelector("#file");

// const readFile = (myFile) => {
// 	const reader = new FileReader();
// 	console.log(reader);
// 	reader.readAsText(myFile);
// 	reader.addEventListener("load", (e) => {
// 		console.log(e);
// 		console.log(e.target.result);
// 		let data = JSON.parse(reader.result);
// 		console.log(data);
// 	});
// };

// $file.addEventListener("change", (e) => {
// 	console.log($file.files[0]);
// 	readFile($file.files[0]);
// });

//FileReader (Multiple files)
const $multipleFiles = document.querySelector("#multiple-files");

$multipleFiles.addEventListener("change", (e) => {
	readFiles($multipleFiles.files);
});

console.log($multipleFiles);

// const readFiles = (files) => {
// 	for (let i = 0; i < files.length; i++) {
// 		console.log(files[i]);
// 		const reader = new FileReader();
// 		reader.readAsText(files[i]);
// 		reader.addEventListener("load", (e) => {
// 			console.log(JSON.parse(e.target.result));
// 		});
// 	}
// };

const readFiles = (files) => {
	for (f of files) {
		console.log(f);
		const reader = new FileReader();
		reader.readAsText(f);
		reader.addEventListener("load", (e) => {
			console.log(JSON.parse(e.target.result));
		});
	}
};

// readAsDataURL() *******************************************
const $readImages = document.querySelector(".read-images");
const $imgFiles = document.querySelector("#img-files");

$imgFiles.addEventListener("change", (e) => {
	readURLs($imgFiles.files);
});

const readURLs = (files) => {
	for (f of files) {
		const reader = new FileReader();
		reader.readAsDataURL(f);
		reader.addEventListener("load", (e) => {
			let newImg = `<img src="${e.target.result}">`;
			$readImages.innerHTML += newImg;
		});
	}
};

// IndexedDB API *******************************************************************************
const IDBRequest = indexedDB.open("myDB", 1); // Opens the DB (if it doesn't exist, creates one)
console.log(IDBRequest);

IDBRequest.addEventListener("upgradeneeded", () => {
	console.log("myBb database was successfully created");
	const db = IDBRequest.result;
	db.createObjectStore("names", {
		autoIncrement: true,
	});
});

IDBRequest.addEventListener("success", () => {
	console.log("It´s OK!");
});

IDBRequest.addEventListener("error", () => {
	console.log("Something went wrong!");
});

const addObject = (obj) => {
	const IDBData = getIDBData();
	// IDBData[0] is objectStore
	IDBData[0].add(obj); // Add the object
	// IDBData[1] is myTransaction
	IDBData[1].addEventListener("complete", () => {
		console.log("obj added successfully!");
	});
};
// addObject({ name: "Enrique"}) from the console

const readObjects = () => {
	const IDBData = getIDBData();
	const cursor = IDBData[0].openCursor();
	cursor.addEventListener("success", () => {
		if (cursor.result) {
			console.log(cursor.result.value);
			cursor.result.continue();
		} else {
			// when the cursor has finished reading the data, it becomes to null and execute the sentence in else
			console.log("All data was successfully readed from myDB");
		}
	});
};
// readObjects() from the console

const modifyObject = (key, obj) => {
	const IDBData = getIDBData();
	// IDBData[0] is objectStore
	IDBData[0].put(obj, key); // Modify the object (if it doesn't exist, creates one)
	// IDBData[1] is myTransaction
	IDBData[1].addEventListener("complete", () => {
		console.log("obj modified correctly!");
	});
};
// modifyObject(3,{ name: "Enrique"}) from the console

const deleteObject = (key) => {
	const IDBData = getIDBData();
	IDBData[0].delete(key); // IDBData[0] is objectStore
	IDBData[1].addEventListener("complete", () => {
		// IDBData[1] is myTransaction
		console.log("obj deleted successfully!");
	});
};
// deleteObject(3) from the console

const getIDBData = () => {
	const db = IDBRequest.result;
	const myTransaction = db.transaction("names", "readwrite");
	const objectStore = myTransaction.objectStore("names");
	return [objectStore, myTransaction];
};

// **********************************************************************************************

//  matchMedia() API
// ********************

const $box = document.querySelector(".box");
const mql = matchMedia("(max-width: 500px)"); // Verify that the max-width is correct
console.log(mql);

mql.addEventListener("change", () => {
	mql.matches
		? $box.classList.replace("box", "responsive-box")
		: $box.classList.replace("responsive-box", "box");
});

// **********************************************************************************************

// IntersectionObserver() API
// ******************************

const $items = document.querySelectorAll(".item");

const verifyVisibility = (entries) => {
	for (let entry of entries) {
		if (entry.isIntersecting) {
			console.log("You are watching", entry.target.textContent);
		}
	}
};

const options = {
	// root: $items, // Root element
	rootMargin: "-100px",
};

const observer = new IntersectionObserver(verifyVisibility, options);

for (let item of $items) {
	observer.observe(item);
}
