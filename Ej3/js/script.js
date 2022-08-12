const buttonAdd = document.getElementById("buttonAdd");
const container = document.getElementById("container");
const inputParagraph = document.getElementById("inputParagraph");

buttonAdd.addEventListener("click", () => {
  // Escribe el código necesario aquí
  // add to container the paragraph with the text from inputParagraph
  const paragraph = document.createElement("p");
  paragraph.innerText = inputParagraph.value;
  container.appendChild(paragraph);
  
  //
});
