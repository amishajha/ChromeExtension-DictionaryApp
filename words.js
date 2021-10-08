document.getElementById("btn").addEventListener("click", wordSearch);

function wordSearch() {
  document.getElementById("searchResult").style.visibility = "visible";
  var defination = document.getElementById("definition");
  var wordtosearch = document.getElementById("search").value;
      

  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordtosearch)
    .then((data) => data.json())
    .then((word) => {
      defination.innerHTML = word[0].meanings[0].definitions[0].definition;
    });
}
