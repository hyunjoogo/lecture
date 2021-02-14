const element = document.querySelector("ol");
console.log(element);
console.log("contentEditable", element.contentEditable);

const nodes = element.childNodes;
for (let i = 0; i < nodes.length; i++) {
  node = nodes[i];
  if (node.nodeType == 1) {
    console.log(node.id, node.contentEditable);
  }
}

const soccernode = document.querySelector("#soccera");
console.log(soccernode.dataset);
if (soccernode.dataset) {
  console.log("dataset.time", soccernode.dataset.time);
} else {
  console.log("dataset.time", "지원하지 않음");
}

console.log("getAttribute-data-time", soccernode.getAttribute("data-time"));
console.log("getAttribute-data-player", soccernode.getAttribute("data-player"));
