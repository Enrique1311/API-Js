const $en = document.querySelector(".en"),
	$es = document.querySelector(".es"),
	$modalContainer = document.querySelector(".modal-container");

const setLanguage = () => {
	$en.addEventListener("click", () => {
		localStorage.setItem("language", "en");
		closeModal();
	});

	$es.addEventListener("click", () => {
		localStorage.setItem("language", "es");
		closeModal();
	});
};

const closeModal = () => {
	$modalContainer.style.animation = "dontShowModal 1s forwards";
	setTimeout(() => {
		$modalContainer.style.display = "none";
	}, 1000);
};

const language = localStorage.getItem("language");

if (language === null) {
	setLanguage();
} else {
	console.log(`Language: ${language}`);
	$modalContainer.style.display = "none";
}

if (language === "en") {
	alert("This page is in English");
}

if (language === "es") {
	alert("Esta página esta en español");
}
