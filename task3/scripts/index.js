const initialArr = [1, 2, 3, -1, -2, -3];

function positiveNumSort(array) {
  let sortedArr = [];

  if (array.length === 0) {
    console.log("Error, empty array");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sortedArr.push(array[i]);
    }
  }

  if (sortedArr.length === 0) {
    return null;
  }

  return sortedArr;
}

console.log(positiveNumSort(initialArr));
