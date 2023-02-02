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
// [] Function => Grid Generator
// [] Button => Prompt -> Regenerate grid
// [] Function => Hover Div Coloring (Black)
// [] Button => Reset all div color
// [] Button => Toggles bool (Black/RGB)
// [] Function => Hover Div Coloring (RGB)

let rgb = document.getElementById("coloring")
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
slider.oninput = function() {
    output.textContent = this.value;
  }

function genGrid(num) {
// container.replaceChildren(); // clears children
}