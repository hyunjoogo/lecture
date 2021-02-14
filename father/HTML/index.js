element = document.getElementsByTagName("title").item(0);
console.log("변경전", element.text);

element.text = "제목 변경";
console.log("변경 후", element.text);

console.log("textContent", element.textContent);
console.log("document.title", document.title);
