function displayPoem(response) {
  console.log("poem generatated");
  new Typewriter("#poem", {
    strings: "No Man Is An Island",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "36399t92b73b5o4fa0b8a2cb798d68aa";
  let prompt =
    "You are a romanic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions.";
  let context = "User instructions: Generate a English poem about roses.";
  let apiURL =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";

  console.log("Generating poem");
  console.log("Prompt: ${prompt}");
  console.log("Context: ${context}");

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
