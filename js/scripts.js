function showSpecies()



window.onload = function () {
  let form = document.querySelector("form");
  form.onclick = function (event) {
    document.querySelector ("#species").removeAttribute("class")
    document.querySelector ("#film").removeAttribute("class");
    document.querySelector ("#music").removeAttribute("class");
    document.querySelector ("#color").removeAttribute("class");
    event.preventDefault();
  
    }
  }
