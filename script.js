// List of movies
const movies = [
  "Four Brothers",
  "Raiders of the Lost Ark",
  "Horrible Bosses",
  "The Imitation Game",
  "A Walk Among the Tombstones",
  "Knight and Day",
  "Money Monster",
  "This Means War",
  "Up",
  "Robin Hood: Men in Tights",
  "Hancock",
  "Marathon Man",
  "It's a Wonderful Life",
  "Rounders",
  "It",
  "Black Swan",
  "I, Robot",
  "War Dogs",
  "Elysium",
  "The Guest",
  "Mulan",
  "Léon: The Professional",
  "Gladiator",
  "Cowboys & Aliens",
  "Les Misérables",
  "Chappaquiddick"
].sort(); // Alphabetically sorted

// Valid combinations and their answers
const validCombos = {
  "Raiders of the Lost Ark,Horrible Bosses,The Imitation Game": "Light Blue",
  "Knight and Day,Money Monster,This Means War": "Triangle",
  "Robin Hood: Men in Tights,Hancock,Marathon Man": "6",
  "It,Black Swan,I, Robot": "Green",
  "Elysium,The Guest,Mulan": "Pentagon",
  "Gladiator,Cowboys & Aliens,Les Misérables": "8"
};

// Populate dropdowns
const dropdowns = ["dropdown1", "dropdown2", "dropdown3"];
dropdowns.forEach(id => {
  const dropdown = document.getElementById(id);
  movies.forEach(movie => {
    const option = document.createElement("option");
    option.value = movie;
    option.textContent = movie;
    dropdown.appendChild(option);
  });
});

// Handle submission
document.getElementById("submitButton").addEventListener("click", () => {
  const selection = dropdowns.map(id => document.getElementById(id).value).join(",");
  
  // Check if the combination is valid
  const resultText = validCombos[selection] || "Access Denied";
  const resultElement = document.getElementById("result");
  resultElement.textContent = resultText;

  // Styling for the result
  resultElement.style.color = resultText === "Access Denied" ? "red" : "green";
});
