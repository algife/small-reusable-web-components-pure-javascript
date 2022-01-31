const writeableAreaId = "writeable-area";
var typingInterval = 150;

let counter = 0;
const textArray = [
  "Starting a hacking attack...",
  ...Array(101)
    .fill(1) // Array of percentages
    .map((e) => [`${counter++}%`]),
  "Accessing to your system...",
  "Retrieving users, passwords and bank data...",
  "Just kidding... Convincing you to hire my services as a full-stack developer...",
  "Let's do it again",
];

const writeableArea = document.getElementById(`${writeableAreaId}`);
var writterInterval = null;

var textIndex = 0,
  charIndex = 0;

const typeTextSlice = () => {
  const text = textArray[textIndex];
  console.log(textIndex, charIndex);

  // Type text slice
  writeableArea.innerHTML = text.slice(0, charIndex + 1);
  //! textIndex: 2 charIndex: 10

  // breaking clauses
  if (charIndex === text.length - 1) {
    charIndex = 0;

    if (textIndex === textArray.length - 1) textIndex = 0;
    else textIndex++;
  } else {
    charIndex++;
  }

  /* // ! ALTERNATIVE IMPLEMENTATION:
  if (charIndex < text.length) charIndex++;
  else {
    charIndex = 0;

    // last text index reset
    if (textIndex < textArray.length - 1) textIndex++;
    else {
      console.log("Starting from the very beginning again...");
      textIndex = 0;
    }
  }
  */
};

const startTyping = () => {
  if (!writterInterval) {
    writterInterval = setInterval(typeTextSlice, typingInterval);
  }
};
