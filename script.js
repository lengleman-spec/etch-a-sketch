const container = document.getElementById("container");
const containerSize = 960; //Used to calculate square size

const button = document.createElement("button");
button.textContent = "Clear";
button.type = "button";
document.body.prepend(button);

function createGrid(squaresPerSide) {
  container.innerHTML = ""; // Removes all exisiting squares
  const squareSize = containerSize / squaresPerSide;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const div = document.createElement("div");
    div.classList.add("square");

    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "green";
    });

    container.appendChild(div);
  }
}

button.addEventListener("click", () => {
  let input = prompt("How many squares do you want?");

  const size = Number(input);
  if (!size || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(size);
});

createGrid(16);

// appendChild() is last because we want to modify it when it's still in memory and not rendered on the page yet
// In the loop we 1. create, 2. configure/manipulate 3. append it to the parent. Now it will be rendered.
