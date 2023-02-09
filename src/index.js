import { getBlogPosts } from "./data";
import "./style.css";
import SeaImage from "./assets/images/sea.jpeg";

const blogs = getBlogPosts();
const ul = document.createElement("ul");
blogs.forEach((blog) => {
	const li = document.createElement("li");
	li.innerText = blog;
	ul.appendChild(li);
});
document.body.appendChild(ul);

const image = document.createElement("img");
image.src = SeaImage;
document.body.prepend(image);
