function run() {
  
  const colorInputOne = document.getElementById("color1");
  const colorInputTwo = document.getElementById("color2");
  const paletteCount = document.getElementById("palette-count-input");
  generatePalette(colorInputOne.value, colorInputTwo.value, paletteCount.value);

  [colorInputOne, colorInputTwo, paletteCount].forEach((colorInput) => {
    colorInput.addEventListener("input", function () {
      generatePalette(
        colorInputOne.value,
        colorInputTwo.value,
        paletteCount.value
      );
    });
  });
}
const percentage1=[0,10,20,40,70,90,100]
const percentage2=[0,10,20,40,70,90]
const percentage3=[0,10,20,40,70,90]
const percentage4=[0,10,20,40,70,90]
let i=0
function generatePalette(color1, color2, paletteCount) {
   i=0
   console.log(paletteCount);
   let percentage=percentage1
  const paletteContainer = document.getElementById("palette");
  paletteContainer.innerHTML = "";
  const colorsPalette = chroma
    .scale([color1, color2])
    .mode("lch")
    .colors(paletteCount);
    colorsPalette.forEach((palette) => {
    const paletteItem = document.createElement("div");

    const paletteColorValue = document.createElement("span");
    paletteColorValue.classList.add("palette-color-value");
    //console.log(chroma.contrast(palette, chroma(palette).darken(3)));

    paletteColorValue.style.setProperty(
      "--name-color",
      chroma.contrast(palette, chroma(palette).darken(3)) > 2
        ? chroma(palette).darken(3)
        : chroma(palette).luminance(3)
    );
   //paletteColorValue.appendChild(document.createTextNode(palette));
   console.log(palette);
    // paletteColorValue.appendChild(document.createTextNode(percentage[i]+'-'+percentage[i+1]+' %'));
    paletteColorValue.appendChild(document.createTextNode(Math.round(((paletteCount-i-1)/paletteCount)*100)+'-'+Math.round(((paletteCount-i)/paletteCount)*100)+' %'));
    i++
    paletteItem.appendChild(paletteColorValue);

    paletteItem.classList.add("palette-item");
    paletteItem.style.setProperty("--palette-color", palette);
    paletteContainer.appendChild(paletteItem);
  });
}
window.addEventListener("load", (event) => {
  run();
});
