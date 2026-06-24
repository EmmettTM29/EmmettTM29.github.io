var notchPos = 50;
var arrayTest = [];
var num0s = 0;

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
  } else if (string.length >= 3) {
    return string[string.length-2] + string[string.length-1];
  }
}

function updateNotch(direction, value) {
  var x
  value = Number(value)
  if (direction === "left") {
    x = (notchPos - value);
    if (x < 0) {
      x += 100
    }
    return x
  } else if (direction === "right") {
    x = (notchPos + value) % 100;
    return x
  }
}

function update(string) {
  var originalPos = notchPos
  var direction = interpretDirection(string)
  var value = interpretValue(string)
  var newPos = updateNotch(direction, value)
  console.log("By turning the lock " + value + " ticks to the " + direction + " from " + originalPos + "th tick, it reaches the " + newPos + "th tick.")
  if (newPos === 0) {
    num0s++
    console.log ("This brings the count of 0's to " + num0s + ".")
  }
  notchPos = newPos
}

function solve(array) {
  for (var i = 0; i < array.length; i++){
    update(array[i])
  }
  console.log("while the final tick was number " + notchPos + ", the actual password is " + num0s + ", as it is the number of times that the notch reached 0.")
}

// quickUpdate() is just update() without console.log().

function quickUpdate (string) {
  var originalPos = notchPos
  var direction = interpretDirection(string)
  var value = interpretValue(string)
  var newPos = updateNotch(direction, value)
  if (newPos === 0) {
    num0s++
  }
  notchPos = newPos
}

//same here; quickSolve() is solve using quickUpdate().

function quickSolve(array) {
  for (var i = 0; i < array.length; i++){
    quickUpdate(array[i])
  }
  console.log("while the final tick was number " + notchPos + ", the actual password is " + num0s + ", as it is the number of times that the notch reached 0.")
}

quickSolve(arrayTest)