const search = document.getElementById("search");
const items = document.querySelectorAll(".item");

search.addEventListener("input", () => {
const value = search.value.toLowerCase();

items.forEach(item => {
const text = item.innerText.toLowerCase();
item.style.display = text.includes(value) ? "block" : "none";
});
});

function filter(type) {
items.forEach(item => {
if (type === "all") {
item.style.display = "block";
} else {
item.style.display = item.classList.contains(type) ? "block" : "none";
}
});
}
