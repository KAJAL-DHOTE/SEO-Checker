// Show "Back to Top" button on scroll
const backToTop = document.querySelector('.back-to-top');

function cursorEffect() {
  var box = document.querySelector("#box");
  var cursor = document.querySelector("#cursor");

  box.addEventListener("mousemove", function (dets) {
      gsap.to(cursor, {
          x: dets.x,
          y: dets.y
      })
  })

  box.addEventListener("mouseenter", function (dets) {
      gsap.to(cursor, {
          scale: 1,
          opacity: 1,
      })
  })

  box.addEventListener("mouseleave", function (dets) {
      gsap.to(cursor, {
          scale: 0,
          opacity: 0,
      })
  })

}
cursorEffect();

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Contact form submission (example logic)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent! We will get back to you soon.');
});