window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
      event.preventDefault();

      function hide() {
        document.getElementById("species").style.display ="hidden"
    }
  }  
};