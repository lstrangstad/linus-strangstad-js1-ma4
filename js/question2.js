const myUrl = "https://api.rawg.io/api/games";
fetch(myUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    createGames(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function createGames(json) {
  console.dir(json);
  const results = json.results;
  let newHtml = "";
  const resultsContainer = document.querySelector(".results");

  results.forEach(function(info) {
    newHtml += `
    <div class="${info.slug}">
     <h2>${info.name}</h2>
      <img src="${info.background_image}" alt="${info.name}">
    </div>`;
  });

  resultsContainer.innerHTML = newHtml;
}
