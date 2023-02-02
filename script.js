function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
} // Darken 10% : shadeColor("#FFFFFF",-10);

// Chronological Checklist
// [X] Base webpage
// [X] Function => Grid Generator
// [X] Button => Prompt -> Regenerate grid
// [X] Function => Hover Div Coloring (Black)
// [X] Button => Reset all div color
// [X] Button => Toggles bool (Black/RGB)
// [X] Function => Hover Div Coloring (RGB)
// [] Darken colored squares during RGB mode

let rgb = false //document.getElementById("coloring")
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
slider.oninput = function() {
    output.textContent = this.value;
  }

function hoverColor(e) {
    if (rgb === false) {
        e.target.style.backgroundColor = "rgb(0,0,0)";
    } else if (e.target.style.backgroundColor === "rgb(255, 255, 255)" ) {
        e.target.style.backgroundColor = '#' + parseInt(Math.random() * 0xffffff).toString(16)
    } else {
        shadeColor(e.target.style.backgroundColor, -10 );
    }
}

function genGrid() {
let num = slider.value
let container = document.querySelector("#container")
container.replaceChildren(); // clears children
// grid-template-columns: repeat(16,16fr);
container.style.setProperty('grid-template-columns', 'repeat('+num+','+num+'fr)');
for (let i=0;i < (num*num) ;i++ ) {
let elem = document.createElement("div");
elem.style.aspectRatio = "1/1";
elem.style.outlineStyle = "solid";
elem.style.outlineColor = "rgb(200,200,200)"
elem.style.outlineWidth = "1px";
elem.style.overflow = "hidden";
elem.style.backgroundColor = "rgb(255,255,255)";
elem.style.height = "auto";
elem.classList.add("grd");
elem.addEventListener("mouseover", hoverColor);
container.appendChild(elem);
}
console.log("Generated grid.") 
}
document.querySelector(".genb").addEventListener("click",genGrid);

function resetGrid() {
    let nodes = document.getElementById('container').childNodes;
    for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'div') {
         nodes[i].style.backgroundColor = "rgb(255,255,255)" ;
     }
    }
    console.log("Reset grid.") 
}
document.querySelector(".reset").addEventListener("click",resetGrid);

function toggleRGB() {
    rgb = !rgb
    console.log("Toggled RGB. " + rgb) 
}
document.querySelector(".toggle").addEventListener("click",toggleRGB);