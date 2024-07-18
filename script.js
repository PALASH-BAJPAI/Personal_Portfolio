gsap.registerPlugin(ScrollTrigger) 


gsap.from('.logo-box', {
    scrollTrigger: '.logo-box', // start the animation when ".box" enters the viewport (once)
    duration:1.2,
    ease: 'power1.out',
    visibility:'hidden',
    stagger:0.05
});

gsap.from('.logo-box', {
    scrollTrigger: '.logo-box', // start the animation when ".box" enters the viewport (once)
    duration:1.8,
    ease: 'power1.out',
    filter:'blur(5px)',
    stagger:0.15
});




