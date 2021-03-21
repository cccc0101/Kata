// ["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]

function blocksAway(directions) {
  let location = {
    east: 0,
    north: 0,
  };
  direction = "";
  for (i = 0; i <= directions.length - 2; i += 2) {
    if (location.north === 0 && direction != "S") {
      if (directions[i] === "left") {
        location.north += directions[i + 1];
        direction = "N";
      } else {
        location.east += directions[i + 1];
        direction = "E";
      }
    } else if (location.east === 0 && direction != "W") {
      if (directions[i] === "left") {
        location.north += directions[i + 1];
        direction = "N";
      } else {
        location.east += directions[i + 1];
        direction = "E";
      }
    } else {
      if (direction === "E") {
        if (directions[i] === "left") {
          location.north += directions[i + 1];
          direction = "N";
        } else {
          location.north -= directions[i + 1];
          direction = "S";
        }
      } else if (direction === "W") {
        if (directions[i] === "left") {
          location.north -= directions[i + 1];
          direction = "S";
        } else {
          location.north += directions[i + 1];
          direction = "N";
        }
      } else if (direction === "N") {
        if (directions[i] === "left") {
          location.east -= directions[i + 1];
          direction = "W";
        } else {
          location.east += directions[i + 1];
          direction = "E";
        }
      } else {
        if (directions[i] === "left") {
          location.east += directions[i + 1];
          direction = "E";
        } else {
          location.east -= directions[i + 1];
          direction = "W";
        }
      }
    }
  }

  return location;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
