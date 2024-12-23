function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "et3cb33e62oc3445295794b051528aaf";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You love to write short poems. Your mission is to generate a 4 line poem in HTML format and separare each line with a <br />. Make sure to follow the user instructions below. Sign the bottom of the bottom with 'Written by AI' inside a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
