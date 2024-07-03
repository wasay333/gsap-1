function paage1animation() {
    
    var tl = gsap.timeline()
    
    tl.from("nav h1, nav h4, nav button",{
        y:-30,
        opacity:0,
        delay:0.2,
        duration:0.2,
        stagger:0.15
    })
    tl.from(".center .center-1 h1, .center .center-1 p,.center .center-1 button ",{
        x:-300,
        opacity:0,
        duration:0.4,
        stagger:0.15
    })
    tl.from(".center .center-2 img",{
        opacity:0,
        duration:0.5
    },"-=0.5")
    tl.from(".section1bottom img",{
        opacity:0,
    duration:0.5,
    stagger:0.15,
    y:-30,
})

}
paage1animation()