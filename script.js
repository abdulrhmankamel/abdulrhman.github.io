const textArray = [
  "SEO Optimization Specialist",
  "Front-End Developer",
  "WordPress Developer",
];
const typingDelay = 120;
const erasingDelay = 80;
const newTextDelay = 1500;

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Projects videos play/pause on hover
document.querySelectorAll('.project').forEach(project => {
  const video = project.querySelector('video');
  project.addEventListener('mouseenter', () => video.play());
  project.addEventListener('mouseleave', () => video.pause());
});
