//your JS code here. If required.
function manipulateData(inputArray) {
  return new Promise(async (resolve) => {
    // Step 1: Resolve the initial promise after 3 seconds
    const resultAfter3Seconds = await new Promise((innerResolve) => {
      setTimeout(() => {
        innerResolve(inputArray);
      }, 3000);
    });

    // Step 2: Filter odd numbers after 1 second
    const resultAfter1Second = await new Promise((innerResolve) => {
      setTimeout(() => {
        const filteredArray = resultAfter3Seconds.filter((num) => num % 2 === 0);
        innerResolve(filteredArray);
      }, 1000);
    });

    // Step 3: Multiply even numbers by 2 after 2 seconds
    const finalResult = await new Promise((innerResolve) => {
      setTimeout(() => {
        const multipliedArray = resultAfter1Second.map((num) => (num % 2 === 0 ? num * 2 : num));
        innerResolve(multipliedArray);
      }, 2000);
    });

    // Step 4: Update the text of the HTML element with the final result
    const outputElement = document.getElementById('output');
    outputElement.textContent = finalResult.toString();

    // Resolve the main promise with the final result
    resolve(finalResult);
  });
}

// Example usage with the input array [1, 2, 3, 4]
manipulateData([1, 2, 3, 4]);
