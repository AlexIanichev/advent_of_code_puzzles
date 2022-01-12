// input is a sting like
// 00100
// 11110
// 10110
// 10111
// 10101
// 01111

const convertBinaryToDecimal = (binaryNumber) => parseInt(binaryNumber, 2);

const getBinaryDiagnosticResult = (dataString) => {
  const dataArray = dataString.split("\n");
  const formattedDataString = dataArray.join("");
  const itemLength = dataArray[0].length;
  let gammaRate = "",
    epsilonRate = "",
    counter = 0,
    result = {};

  for (let i = 0; i < itemLength; i++) {
    result[i] = { 0: 0, 1: 0 };
  }

  for (let num of formattedDataString) {
    result[counter][num]++;

    if (counter === itemLength - 1) {
      counter = 0;
    } else {
      counter++;
    }
  }

  for (let j = 0; j < itemLength; j++) {
    const valuesObject = result[j];
    const areZeroesPrevail = valuesObject[0] > valuesObject[1];

    gammaRate += areZeroesPrevail ? 0 : 1;
    epsilonRate += areZeroesPrevail ? 1 : 0;
  }

  return (
    convertBinaryToDecimal(gammaRate) * convertBinaryToDecimal(epsilonRate)
  );
};
