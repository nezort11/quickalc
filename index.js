// Listen to input value changes
// Check whether the value is valid (regex)
// Make some helping values changes
// Evaluate expression
// Display the result

const input = document.querySelector("#input");
const result = document.querySelector("#result");
result.innerHTML = "...";

// Event binding via JavaScript
input.addEventListener("input", (e) => {
  try {
    result.textContent = math.evaluate(e.target.value);
  } catch {
    // If any kind of error (SyntaxError, TypeError, ReferenceError, etc.)
    result.textContent = "...";
  }
});
