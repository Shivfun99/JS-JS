const evenNumbers = [2, 4, 6];
const createOddNumberArray = (number) => {
  return number + 1;
};
const oddNumbers = evenNumbers.map(number => createOddNumberArray(number));

console.log(oddNumbers);