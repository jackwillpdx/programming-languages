window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
      event.preventDefault();

      let btn1 = document.getElementById("btn1");
      if (button = form.onsubmit) {
        document.querySelector('#species').removeAttribute("class");
      } else {
        document.querySelector('#animal').removeAttribute("class");
      }

      let btn2 = document.getElementById("btn2")
      if (button = form.onsubmit) {
        document.querySelector('#film').removeAttribute("class");
      } else {
        document.querySelector('#movie').removeAttribute("class");
      }
  }
};