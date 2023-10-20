function handleSelect(event) {
    event.preventDefault();
    const selection = document.getElementById("evening").value;
  }
  
  window.addEventListener("load", function() {
    document.getElementById("night-out").addEventListener("submit", handleSelect);
  });