function breakTheText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    // console.log(h1Text)
    var splittedText = h1Text.split("")
    // console.log(splittedText)
    var halfValue = Math.floor(splittedText.length/2)
    var clutter = "";
    splittedText.forEach(function(elem, idx){
        if (idx<halfValue) {
            clutter = clutter + `<span class="a">${elem}</span>`
        } else {
            clutter = clutter + `<span class="b">${elem}</span>`            
        }
    })
    h1.innerHTML = clutter
console.log(splittedText)
}
breakTheText()
gsap.from("h1 .a",{
    y:40,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.2
})
gsap.from("h1 .b",{
    y:40,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:-0.2
})