//input is a sting like
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
