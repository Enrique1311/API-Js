const d = document;
const $publicationsContainer = d.querySelector(".publications-container");

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
