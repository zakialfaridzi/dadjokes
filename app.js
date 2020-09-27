const jokeElement = document.getElementById("joke");
const get_joke = document.getElementById("get_joke");

get_joke.addEventListener("click", generate);

generate();

async function generate() {
  const jokeapi = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  const joke = await jokeapi.json();
  console.log(joke);
  jokeElement.innerHTML = joke.joke;
}
