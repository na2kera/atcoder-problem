function main(input) {
  const a = input.split("\n");
  const temp = a[0];

  if (temp >= 38.0) {
    console.log(1);
    return;
  } else if (temp >= 37.5) {
    console.log(2);
    return;
  } else {
    console.log(3);
    return;
  }
}

const test_input = `36.6`;

main(test_input);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
