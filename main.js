var router = new PJaxRouter({
    container: document.querySelector(".pjax-container"),
    cancelNavigationClass: "out",
    cacheLinks: ".important-pages",
    cacheNavigatedPages: !0,
    cacheLength: 30,
    onStart: {
        value: function(e, r) {
            leaveAnimation()
        }
    },
    onLeaving: {
        duration: 1250,
        value: function(e, r) {}
    },
    onWaiting: {
        value: function(e, r) {}
    },
    onError: {
        value: function(e, r) {}
    },
    onReady: {
        value: function(e, r) {
            if (SmoothScroll(), enterAnimation(), Cursor(), "works.html" == r) {
                console.log("works page is loaded"), gsap.to(".works", {
                    skewX: -10,
                    color: "#519259"
                }), gsap.to(".kshitij", {
                    skewX: 0,
                    color: "black"
                });
                let e = document.querySelector(".i1"),
                    r = document.querySelector(".i2");
                e.addEventListener("click", (() => {
                    alert("Sorry, App is still under development.")
                })), r.addEventListener("click", (() => {
                    alert("Sorry, App is still under development.")
                }))
            } else "index.html" == r && (console.log("index page is loaded"), gsap.to(".kshitij", {
                skewX: -10,
                color: "#519259"
            }), gsap.to(".works", {
                skewX: 0,
                color: "black"
            }))
        }
    }
});

function leaveAnimation() {
    gsap.to(".curtain_1", 1.2, {
        width: "100%",
        ease: "power4.inOut"
    }), gsap.to(".curtain_2", 1.2, {
        width: "100%",
        ease: "power4.inOut",
        delay: .1
    }), gsap.to(".curtain_3", 1.2, {
        width: "100%",
        ease: "power4.inOut",
        delay: .2
    })
}

function enterAnimation() {
    gsap.to(".curtain_1", 1.2, {
        width: "0%",
        ease: "power4.inOut",
        delay: 1
    }), gsap.to(".curtain_2", 1.2, {
        width: "0%",
        ease: "power4.inOut",
        delay: 1.1
    }), gsap.to(".curtain_3", 1.2, {
        width: "0%",
        ease: "power4.inOut",
        delay: 1.2
    })
}

function Interact() {
    let e = document.querySelector(".kshitij"),
        r = document.querySelector(".works"),
        c = document.querySelector(".contact"),
        t = document.querySelector(".github"),
        o = document.querySelector(".linkedin"),
        u = document.querySelector(".dribbble");
    e.addEventListener("mouseover", (() => {
        document.querySelector(".cursor__circle").style.width = "4vw", document.querySelector(".cursor__circle").style.height = "4vw", document.querySelector(".cursor__circle").style.background = "#519259", document.querySelector(".cursor__circle").style.opacity = .1, document.querySelector("#cursor").style.margin = "-2vw"
    })), r.addEventListener("mouseover", (() => {
        document.querySelector(".cursor__circle").style.width = "4vw", document.querySelector(".cursor__circle").style.height = "4vw", document.querySelector(".cursor__circle").style.background = "#519259", document.querySelector(".cursor__circle").style.opacity = .1, document.querySelector("#cursor").style.margin = "-2vw"
    })), c.addEventListener("mouseover", (() => {
        document.querySelector(".cursor__circle").style.width = "4vw", document.querySelector(".cursor__circle").style.height = "4vw", document.querySelector(".cursor__circle").style.background = "#519259", document.querySelector(".cursor__circle").style.opacity = .1, document.querySelector("#cursor").style.margin = "-2vw"
    })), t.addEventListener("mouseover", (() => {
        document.querySelector(".cursor__circle").style.width = "4vw", document.querySelector(".cursor__circle").style.height = "4vw", document.querySelector(".cursor__circle").style.background = "#519259", document.querySelector(".cursor__circle").style.opacity = .1, document.querySelector("#cursor").style.margin = "-2vw", t.style.cursor = "pointer"
    })), o.addEventListener("mouseover", (() => {
        document.querySelector(".cursor__circle").style.width = "4vw", document.querySelector(".cursor__circle").style.height = "4vw", document.querySelector(".cursor__circle").style.background = "#519259", document.querySelector(".cursor__circle").style.opacity = .1, document.querySelector("#cursor").style.margin = "-2vw", o.style.cursor = "pointer"
    })), u.addEventListener("mouseover", (() => {
        document.querySelector(".cursor__circle").style.width = "4vw", document.querySelector(".cursor__circle").style.height = "4vw", document.querySelector(".cursor__circle").style.background = "#519259", document.querySelector(".cursor__circle").style.opacity = .1, document.querySelector("#cursor").style.margin = "-2vw", u.style.cursor = "pointer"
    })), e.addEventListener("mouseout", (() => {
        document.querySelector(".cursor__circle").style.width = "1vw", document.querySelector(".cursor__circle").style.height = "1vw", document.querySelector(".cursor__circle").style.background = "black", document.querySelector(".cursor__circle").style.border = "none", document.querySelector(".cursor__circle").style.opacity = 1, document.querySelector("#cursor").style.margin = "-.7vw"
    })), r.addEventListener("mouseout", (() => {
        document.querySelector(".cursor__circle").style.width = "1vw", document.querySelector(".cursor__circle").style.height = "1vw", document.querySelector(".cursor__circle").style.background = "black", document.querySelector(".cursor__circle").style.border = "none", document.querySelector(".cursor__circle").style.opacity = 1, document.querySelector("#cursor").style.margin = "-.7vw"
    })), c.addEventListener("mouseout", (() => {
        document.querySelector(".cursor__circle").style.width = "1vw", document.querySelector(".cursor__circle").style.height = "1vw", document.querySelector(".cursor__circle").style.background = "black", document.querySelector(".cursor__circle").style.border = "none", document.querySelector(".cursor__circle").style.opacity = 1, document.querySelector("#cursor").style.margin = "-.7vw"
    })), t.addEventListener("mouseout", (() => {
        document.querySelector(".cursor__circle").style.width = "1vw", document.querySelector(".cursor__circle").style.height = "1vw", document.querySelector(".cursor__circle").style.background = "black", document.querySelector(".cursor__circle").style.border = "none", document.querySelector(".cursor__circle").style.opacity = 1, document.querySelector("#cursor").style.margin = "-.7vw"
    })), o.addEventListener("mouseout", (() => {
        document.querySelector(".cursor__circle").style.width = "1vw", document.querySelector(".cursor__circle").style.height = "1vw", document.querySelector(".cursor__circle").style.background = "black", document.querySelector(".cursor__circle").style.border = "none", document.querySelector(".cursor__circle").style.opacity = 1, document.querySelector("#cursor").style.margin = "-.7vw"
    })), u.addEventListener("mouseout", (() => {
        document.querySelector(".cursor__circle").style.width = "1vw", document.querySelector(".cursor__circle").style.height = "1vw", document.querySelector(".cursor__circle").style.background = "black", document.querySelector(".cursor__circle").style.border = "none", document.querySelector(".cursor__circle").style.opacity = 1, document.querySelector("#cursor").style.margin = "-.7vw"
    })), t.addEventListener("click", (() => {
        window.open("https://github.com/Rishikgoud43", "_blank")
    })), o.addEventListener("click", (() => {
        window.open("https://www.linkedin.com/in/m-rishik-shiva-sai-goud-139391216", "_blank")
    })), u.addEventListener("click", (() => {
        window.open("https://dribbble.com/Rishikgoud43", "_blank")
    }))
}

function preventBack() {
    window.history.forward()
}
window.addEventListener("load", (() => {
    gsap.to(document.body, 1.5, {
        opacity: 1
    })
})), Interact(), setTimeout("preventBack()", 0), window.onunload = function() {};