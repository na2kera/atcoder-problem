function main(input) {
  const a = input.split("\n");
  const n = parseInt(a[0]);
  const numArray = a[1].split(" ").map((str) => parseInt(str, 10));
  for (let i = 1; i < numArray.length - 1; i++) {
    if (numArray[i - 1] == numArray[i] && numArray[i] == numArray[i + 1]) {
      console.log("Yes");
      return;
    }
  }
  console.log("No");
  return;
}

const test_input = `13
1 1 1 1 1 1 1 1 1 1 1 1 1`;

main(test_input);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
