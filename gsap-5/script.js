var section = document.querySelector('#section');
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

let prevX = 0;
let prevY = 0;

// Flag to track if the cursor is over the image
let isOverImage = false;

section.addEventListener("mousemove", function(dets) {
    if (!isOverImage) { // Only apply the dynamic effect when not hovering over the image
        // Calculate the direction of movement
        let deltaX = dets.x - prevX;
        let deltaY = dets.y - prevY;

        // Update the previous mouse position
        prevX = dets.x;
        prevY = dets.y;

        // Determine the shape change based on direction
        let scaleX = deltaX !== 0 ? 1 + Math.abs(deltaX) / 100 : 1;
        let scaleY = deltaY !== 0 ? 1 + Math.abs(deltaY) / 100 : 1;

        // If the cursor is moving horizontally, stretch it horizontally, otherwise stretch it vertically
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            scaleX = 1.5;
            scaleY = 0.5;
        } else {
            scaleX = 0.5;
            scaleY = 1.5;
        }

        // Animate the cursor
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            scaleX: scaleX,
            scaleY: scaleY,
            backgroundColor: "#fff",
            duration: 0.1,
        });
    } else {
        // Maintain the state when hovering over the image
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            scaleX: 2,
            scaleY: 2,
            backgroundColor: "#ffffff8a",
            duration: 0.1,
        });
    }
});

// Add mouseenter and mouseleave events to imageDiv
imageDiv.addEventListener("mouseenter", function() {
    cursor.innerHTML = 'View More';
    isOverImage = true; // Set flag to true
    gsap.to(cursor, {
        scaleX: 2,
        scaleY: 2,
        backgroundColor: "#ffffff8a",
        duration: 0.1,
    });
});

imageDiv.addEventListener("mouseleave", function() {
    cursor.innerHTML = '';
    isOverImage = false; // Set flag to false
});