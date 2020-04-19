function binarySearchIterative(array, x) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    if (array[mid] === x) {
      return true;
    } else if (array[mid] < x) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid - 1;
    }
  }

  return false;
}



function binarySearchRecursive(array, x, leftIndex = 0, rightIndex = array.length) {
  if (leftIndex > rightIndex) {
    return false;
  }

  let mid = Math.floor((leftIndex + rightIndex) / 2);
  if (array[mid] === x) {
    return true;
  } else if (x < array[mid]) {
    return binarySearchRecursive(array, x, leftIndex, mid - 1);
  } else {
    return binarySearchRecursive(array, x, mid + 1, rightIndex);
  }
}



// test
test(binarySearchIterative([1, 7, 8, 11, 12, 15], 11), true);
test(binarySearchIterative([1, 7, 8, 11, 12, 15], 6), false);
test(binarySearchRecursive([1, 2, 3, 11, 12, 15], 15), true);
test(binarySearchRecursive([3, 12, 15], 1), false);

function test(actual, expected) {
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}