const d = document,
	$zone = d.querySelector(".zone"),
	$objects = d.querySelector(".objects").children;

const changeBackground = (n, e) => {
	e.dataTransfer.setData("img", n);
};

$zone.addEventListener("dragover", (e) => {
	e.preventDefault();
});

$zone.addEventListener("drop", (e) => {
	let n = e.dataTransfer.getData("img");
	$zone.style.backgroundImage = `url("assets/img-${n}.jpg")`;
});

for (let i = 1; i < $objects.length + 1; i++) {
	d.querySelector(`.object${i}`).addEventListener("dragstart", (e) => {
		changeBackground(i, e);
	});
}
