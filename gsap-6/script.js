var tl = gsap.timeline()
var open = document.querySelector("#nav i");
var close = document.querySelector("#full i");

tl.to("#full",{
right:0,
duration:0.8
})
tl.from("#full h4",{
opacity:0,
x:150,
stagger:0.3,
duration:0.5
})
tl.from('#full i',{
    opacity:0,
    scale:0.3
})
tl.pause()

open.addEventListener("click",function(){
tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
    })