var notchPos = 50;
console.log(notchPos);

function interpretDirection(string) {
  if (string[0] === "L") {
    return "left";
  } else if (string[0] === "R") {
    return "right";
  }
}

function interpretValue(string) {
  if (string.length === 2) {
    return string[1];
  } else if (string.length === 3) {
    return string[1] + string[2];
  } else if (string.length > 3) {
  }
}

function updateNotch(direction, x) {
  if (direction === "left") {
    notchPos = (notchPos + x) % 100;
  } else if (direction === "right") {
    notchPos = (notchPos + x) % 100;
  }
}

function updateForHuman(string) {
  console.log();
}

function f(string) {
  updateForHuman(string);
}

// in terminal run "node aoc/day1.js" (no quotes) to run the code and use the terminal as a console