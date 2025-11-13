document.getElementById("suggestBtn").addEventListener("click", function() {
  alert("Redirecting to Crop Suggestion Page...");
  // Future: window.location.href = "suggest.html";
});
document.getElementById("cropForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let temp = parseFloat(document.getElementById("temp").value);
  let rain = parseFloat(document.getElementById("rain").value);
  let soil = document.getElementById("soil").value;
  let region = document.getElementById("region").value;

  let crop = "";

  // Simple rule-based crop suggestion
  if (soil === "Loamy" && rain > 80) crop = "Rice";
  else if (soil === "Sandy" && temp > 25) crop = "Groundnut";
  else if (soil === "Clay" && rain < 60) crop = "Wheat";
  else crop = "Maize";

  document.getElementById("result").innerText =
    `🌱 Recommended Crop: ${crop}`;
});
// Example: Show alert when user clicks a crop card
const cards = document.querySelectorAll(".crop-card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    alert(`You selected ${card.querySelector("h3").innerText}`);
  });
});

