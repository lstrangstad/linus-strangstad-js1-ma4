const myUrl = "https://api.rawg.io/api/games/4200";
fetch(myUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    createGameDetails(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function createGameDetails(json) {
  const image = document.querySelector(".image");
  image.style = `background-image: url(${json.background_image})`;

  const name = document.querySelector("h1");
  name.innerHTML = json.name;

  const description = document.querySelector(".description");
  description.innerHTML = json.description;
}
