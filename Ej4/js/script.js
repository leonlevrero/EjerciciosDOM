const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

  const container = document.getElementById("container");
  const paragraph = document.createElement("p")
  for ( var i = 0; i < DATA.length; i++ ) {
    paragraph.innerText +=  DATA[i].name + " " + DATA[i].lastname; 
   container.appendChild(paragraph);
    
 }

  
