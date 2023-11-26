//your JS code here. If required.
function manipulateData(inputArray) {
  // Step 1: Create a promise that resolves after 3 seconds
  const initialPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  });

  // Step 2: Chain the promises to filter odd numbers after 1 second
  const oddFilterPromise = initialPromise.then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredArray = result.filter((num) => num % 2 === 0);
        resolve(filteredArray);
      }, 1000);
    });
  });

  // Step 3: Chain the promises to multiply even numbers by 2 after 2 seconds
  const multiplyByTwoPromise = oddFilterPromise.then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedArray = result.map((num) => (num % 2 === 0 ? num * 2 : num));
        resolve(multipliedArray);
      }, 2000);
    });
  });

  // Step 4: Update the text of the HTML element with the final result
  multiplyByTwoPromise.then((result) => {
    const outputElement = document.getElementById('output');
    outputElement.textContent = result.toString();
  });

  // Return the initial promise to allow further chaining if needed
  return initialPromise;
}

// Example usage with the input array [1, 2, 3, 4]
manipulateData([1, 2, 3, 4]);
