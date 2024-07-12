const d = document;
const $publicationsContainer = d.querySelector(".publications-container");
let counter = 0;

const createPublicationsCode = (name, content) => {
	const $divPublication = d.createElement("div"),
		$h3Name = d.createElement("h3"),
		$pComment = d.createElement("p"),
		$divAddComment = d.createElement("div"),
		$inputComment = d.createElement("input"),
		$buttonSend = d.createElement("input");

	$divPublication.classList.add("publication");
	$divAddComment.classList.add("add-comment");
	$inputComment.classList.add("comment-input");
	$buttonSend.classList.add("send-btn");

	$inputComment.setAttribute("placeholder", "Write a comment...");
	$h3Name.textContent = name;
	$pComment.textContent = content;

	$buttonSend.type = "submit";

	$divAddComment.appendChild($inputComment);
	$divAddComment.appendChild($buttonSend);

	$divPublication.appendChild($h3Name);
	$divPublication.appendChild($pComment);
	$divPublication.appendChild($divAddComment);

	return $divPublication;
};

const loadMorePublications = (entry) => {
	if (entry[0].isIntersecting) {
		loadPublications(4);
	}
};

const observer = new IntersectionObserver(loadMorePublications);

const loadPublications = async (num) => {
	const $frament = d.createDocumentFragment();
	const req = await fetch("assets/data.txt");
	const content = await req.json();
	const data = content.content;

	for (let i = 0; i < num; i++) {
		if (data[counter] != undefined) {
			const newPublic = createPublicationsCode(
				data[counter].name,
				data[counter].comment
			);
			$frament.appendChild(newPublic);
			counter++;

			if (i == num - 1) observer.observe(newPublic);
		} else {
			let $noMorePub = d.createElement("h4");
			$noMorePub.textContent = "No more Publications...";
			$frament.appendChild($noMorePub);
			$publicationsContainer.appendChild($frament);
			break;
		}
	}

	$publicationsContainer.appendChild($frament);
};
loadPublications(2);
