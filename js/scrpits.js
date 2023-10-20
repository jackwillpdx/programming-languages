window.onload = function () {
    function hideQuestions() {
    let div = document.querySelector("species");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }  
  }  
}

function handleSelect(event) {
    event.preventDefault();
    const selection = document.getElementById("evening").value;
  }
  
  window.addEventListener("load", function() {
    document.getElementById("night-out").addEventListener("submit", handleSelect);
  });