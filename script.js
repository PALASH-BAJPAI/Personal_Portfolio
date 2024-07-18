gsap.registerPlugin(ScrollTrigger) 
var w =  window.screen.width;


gsap.from('.logo-box', {
    scrollTrigger: '.logo-box', // start the animation when ".box" enters the viewport (once)
    duration:1,
    display:'none',
    ease: "bounce.out",
    x:w,
    stagger:0.05
});




