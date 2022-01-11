// input is a sting like
// 148
// 167
// 168
// 169
// 182
// 188
// 193
// 209

const getNumberOfRises = (heightsString) => {
  const heightsArray = heightsString.split("\n");
  const length = heightsArray.length;
  let numberOfRises = 0;

  for (let i = 0; i < length; i++) {
    if (Number(heightsArray[i]) < Number(heightsArray[i + 1])) {
      numberOfRises++;
    }
  }

  return numberOfRises;
};

const directions = {
  up: "up",
  down: "down",
   forward: "forward",
};

const getResultingPosotion = (commandsString) => {
  const commandsArray = commandsString.split("\n");
  let coordinates = {horizontal = 0, vertical = 0};


  for (let command of commandsArray) {
      const [direction, value] = command.split(" ");
      const numberValue = Number(value);

      if (direction === directions.down) {
          coordinates.vertical += numberValue
      }

      if (direction === directions.up) {
          coordinates.vertical -= numberValue
      }

      if (direction === directions.forward) {
          coordinates.horizontal += numberValue
      }

         return coordinates.horizontal * coordinates.vertical
      
  }
}