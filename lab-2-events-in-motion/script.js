// Get elements from the HTML

const colorButton = document.getElementById("colorButton");
const textButton = document.getElementById("textButton");
const title = document.getElementById("title");
const box = document.getElementById("box");
const windowSize = document.getElementById("windowSize");
const status = document.getElementById("status");


// Keeps track of which mood colour is currently active

let moodNumber = 0;

const moods = [
  "moodPink",
  "moodBlue",
  "moodYellow",
  "moodGreen"
];


// 1. CLICK EVENT
// Cycles through different background colours

colorButton.addEventListener("click", function() {

  // Turn off dark mode if it is currently on
  document.body.classList.remove("darkMode");

  // Remove all previous mood classes
  document.body.classList.remove(
    "moodPink",
    "moodBlue",
    "moodYellow",
    "moodGreen"
  );

  // Add the next mood colour
  document.body.classList.add(moods[moodNumber]);

  moodNumber++;

  // Start again after the last colour
  if (moodNumber === moods.length) {
    moodNumber = 0;
  }

  status.textContent = "Mood changed!";

});


// 2. CLICK EVENT
// Changes the heading text

textButton.addEventListener("click", function() {

  title.textContent = "The Page Has Changed!";

  status.textContent = "You changed the page text.";

});


// 3. MOUSE EVENT
// Changes the box when the mouse enters

box.addEventListener("mouseenter", function() {

  box.style.backgroundColor = "orange";

  box.style.width = "210px";

  box.style.height = "210px";

  box.textContent = "Mouse detected!";

  status.textContent = "You triggered a mouse event.";

});


// Returns the box to normal when the mouse leaves

box.addEventListener("mouseleave", function() {

  box.style.backgroundColor = "lightblue";

  box.style.width = "170px";

  box.style.height = "170px";

  box.textContent = "Hover over me!";

  status.textContent = "The mouse left the box.";

});


// 4. KEYBOARD EVENT
// Press D to turn dark mode on or off

document.addEventListener("keydown", function(event) {

  if (event.key.toLowerCase() === "d") {

    // Remove mood colours so dark mode displays properly
    document.body.classList.remove(
      "moodPink",
      "moodBlue",
      "moodYellow",
      "moodGreen"
    );

    document.body.classList.toggle("darkMode");

    if (document.body.classList.contains("darkMode")) {

      status.textContent = "Dark mode is on.";

    } else {

      status.textContent = "Dark mode is off.";

    }

  }

});


// 5. WINDOW / BOM EVENT
// Displays the browser window size

function showWindowSize() {

  windowSize.textContent =
    "Browser window: " +
    window.innerWidth +
    "px × " +
    window.innerHeight +
    "px";

}


// Updates when the browser window is resized

window.addEventListener("resize", function() {

  showWindowSize();

  status.textContent = "The browser window was resized.";

});


// Shows the window size when the page first loads

showWindowSize();