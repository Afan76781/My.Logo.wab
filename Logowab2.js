document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#loading", {
        y: '-100%',
        ease: 'power2.in',
        onComplete: () => {
            gsap.fromTo(".pop-up", {
                y: 10,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                onComplete: () => {
                    gsap.fromTo(".show-text", {
                        letterSpacing: "99px",
                    }, {
                        letterSpacing: 0,
                        opacity: 1,
                        stagger: 0.5,
                        duration: 2,
                        ease: "power4.out",
                        onComplete: () => {
                            gsap.fromTo(".scalling", {
                                scale: "2",
                            }, {
                                scale: "1",
                                opacity: 1,
                                duration: 1,
                                stagger: 0.5,
                                ease: "circ.in",
                            })
                        }
                    })
                }
            })
        }
    })
})