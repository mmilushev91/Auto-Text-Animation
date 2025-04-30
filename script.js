const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];
let careerIndex = 0;
let charIndex = 0;
console.log(careers[careerIndex]);

function updateText() {
  charIndex++;
  containerEl.innerHTML = `<h1>I'am a ${careers[careerIndex].slice(
    0,
    charIndex
  )}</h1>`;

  if (charIndex === careers[careerIndex].length) {
    careerIndex++;
    charIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 400);
}
updateText();
