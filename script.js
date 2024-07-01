var crsr = document.querySelector("#cursor");
var cursorblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 20 + "px";
    crsr.style.top = dets.y - 20 + "px";
    cursorblur.style.left = dets.x - 100 + "px";
    cursorblur.style.top = dets.y - 100 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
    },
});

gsap.from("#about-us img, #about-in", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "58%",
        scrub: 2,
    },
});

gsap.from("#left", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#left",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from("#right", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#right",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from("#anotherh1", {
    y: 50,
    scrollTrigger: {
        trigger: "#right",
        scroller: "body",
        duration: 10,
        // markers: true,
        start: "top 5%",
        end: "top 15%",
        scrub: 5,
    },
});
