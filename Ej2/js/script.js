//document.addEventListener("DOMContentLoaded") { 
  // Escribe el código necesario aquí
 // var element = document.getElementById("lorem");
  //element.addEventListener("click").classList.add("highlight");
   // } 


    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("highlight").addEventListener("click", function () {
       // document.getElementById("lorem").classList.add("highlight");
        document.getElementById("lorem").className="highlight";
         }); 
    });