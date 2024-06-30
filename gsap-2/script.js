gsap.from("#page1 #box",{
opacity:0,
scale:0.2,
rotate:360,
duration:1
})

gsap.from("#page2 #box",{
    opacity:0,
    scale:0.2,
    rotate:360,
    duration:1,
    scrollTrigger:{
trigger:"#page2 #box",
scroller:"body",
markers:true,
scrollTop:"60%"
    }
    })
    gsap.from("#page3 h2",{
        opacity:0,
        x:200,
        duration:1,
delay:1,
scrollTrigger:{
    trigger:"#page3 h2",
    scroller:"body",
    markers:true,
    scrollTop:"60%"
}        
    })
    gsap.from("#page3 h3",{
        opacity:0,
        x:-200,
        duration:1,
delay:1,
scrollTrigger:{
    trigger:"#page3 h3",
    scroller:"body",
    markers:true,
    scrollTop:"70%"
}        
    })
    gsap.from("#page4 #box",{
        opacity:0,
        scale:0.2,
        rotate:720,
        duration:1,
        scrollTrigger:{
    trigger:"#page4 #box",
    scroller:"body",
    markers:true,
start:"top 60%",
    end:"top 30%",
    scrub:2
        }
        })
        