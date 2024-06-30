gsap.to('#page2 h1',{
transform:"translateX(-170%)",
scrollTrigger:{
    trigger:'#page2',
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -150%",
    scrub:2,
    pin:true
}
})
gsap.from('#page3 h1',{
    transform:"translateX(-460%)",
    scrollTrigger:{
        trigger:'#page3',
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
    })