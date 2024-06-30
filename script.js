

        var tl = gsap.timeline()

        tl.from("h2",{
opacity:0,
y:20,
duration:0.2,
delay:0.1
        })
        
        tl.from("h4",{
            opacity:0,
            y:20,
            
            duration:0.1,
            stagger:1,
            delay:0.1
        })
        tl.from('h1',{
            opacity:0,
            scale:0.2,
            duration:0.2,
            delay:0.1

        })