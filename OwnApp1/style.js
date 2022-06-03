// ---- Meny ---- //
var navLinks = document.getElementById("navLinks");
    
function visaMeny(){
    navLinks.style.right = "0";
}
function doljMeny(){
    navLinks.style.right = "-200px";
}

// ---- Bilder Zoom - scale down (on click) ---- //
window.onload = () => {
    let all = document.getElementsByClassName("zoomD"),
     lightbox = document.getElementById("lightbox");
   
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
      };
    }}

    lightbox.onclick = () => {
      lightbox.className = "hide";
    };
  };





