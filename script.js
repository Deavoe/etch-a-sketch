// function shadeColor(col, amt) {
//     var num = parseInt(color,16),
//     amt = Math.round(2.55 * percent),
//     R = (num >> 16) + amt,
//     B = (num >> 8 & 0x00FF) + amt,
//     G = (num & 0x0000FF) + amt;

//     return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
// }

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

function rgbToHex(r, g, b) {
return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
function hoverColor(e) {
    if (rgb === false && e.target.style.backgroundColor === "rgb(255, 255, 255)"  ) {
        e.target.style.backgroundColor = "rgb(0,0,0)";
    } else if (e.target.style.backgroundColor === "rgb(255, 255, 255)" ) { //(e.target.className === "grd" ) { //
        let rc = '#' + parseInt(Math.random() * 0xffffff).toString(16)
        e.target.style.backgroundColor = rc
        e.target.className = '#' + parseInt(Math.random() * 0xffffff).toString(16)
    // } else {
    //     e.target.style.backgroundColor = shadeColor(e.target.className, -10) ;
    }
}

function removeTransition(e) {
    // if (e.propertyName !== 'transform') return;
    e.target.classList.remove('hide');
  }

let container = document.querySelector("#container")
container.addEventListener('transitionend', removeTransition);

function genGrid(bool) {
let num = slider.value
// let container = document.querySelector("#container")
if (bool !== false ) {
    container.classList.toggle("hide")
}
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
elem.style.transition = "all 0.12s";
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
    container.classList.add("hide")
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

document.querySelector('.title').classList.remove("hover")

genGrid(false)

document.querySelector('body').classList.remove("hover2")