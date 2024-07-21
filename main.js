
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Corrected selector to '.navbar'

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section active line
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            document.querySelector('header nav a[href="#' + id +'"]').classList.add('active');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when clicking navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed(".multiple-text", {
    strings: ['Mern Stack Developer', 'Programmer', 'Mern Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// heart animation falling
(function (e, t, a) {
    function n() {
        c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
        o();
        r();
    }
    function r() {
        for (var e = 0; e < d.length; e++) {
            if (d[e].alpha <= 0) {
                t.body.removeChild(d[e].el);
                d.splice(e, 1);
            } else {
                d[e].y--;
                d[e].scale += 0.004;
                d[e].alpha -= 0.013;
                d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999";
            }
        }
        requestAnimationFrame(r);
    }
    function o() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function (e) {
            t && t();
            i(e);
        };
    }
    function i(e) {
        var a = t.createElement("div");
        a.className = "heart";
        d.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s() });
        t.body.appendChild(a);
    }
    function c(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e));
        } catch (t) {
            a.styleSheet.cssText = e;
        }
        t.getElementsByTagName("head")[0].appendChild(a);
    }
    function s() {
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
    }
    var d = [];
    e.requestAnimationFrame =
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        e.mozRequestAnimationFrame ||
        e.oRequestAnimationFrame ||
        e.msRequestAnimationFrame ||
        function (e) {
            setTimeout(e, 1e3 / 60);
        };
    n();
})(window, document);

const heart = document.getElementById("heart");

const colors = ["#FF5733", "#FFC300", "#FF33A1", "#33FF7A", "#3399FF"];

// Function to change the heart's background color randomly
function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heart.style.backgroundColor = randomColor;
    heart.style.border = "none"; // Remove the border
}

// Attach click event listener
heart.addEventListener("click", changeColor);
