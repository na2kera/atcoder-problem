function main(input) {
  const a = input.split("\n");
  const numArray = a[0].split(" ").map((str) => parseInt(str, 10));

  let count = 0;
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] < numArray[i - 1]) {
      [numArray[i - 1], numArray[i]] = [numArray[i], numArray[i - 1]];
      count++;
    }
  }

  if (count == 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

const test_input = `3 5 1 2 4`;

main(test_input);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
