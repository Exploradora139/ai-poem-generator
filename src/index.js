function generatePoem(event) {
  event.preventDefault();

  new Typerwriter("#poem", {
    strings: [
      "In the realm of dreams, where shadows dance,",
      "A poet weaves words in a mystical trance.",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
