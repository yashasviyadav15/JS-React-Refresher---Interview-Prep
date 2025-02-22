// Select the heading element
const heading = document.getElementById("heading");

// Select the button element
const button = document.getElementById("changeText");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Change the text of the heading
  heading.textContent = "Text Changed!";
  const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);
});