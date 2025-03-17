function main(input) {
  const a = input.split("\n");
  const count = a[0];
  const numArray = a[1].split(" ").map((str) => parseInt(str, 10));

  for (i = 1; i < count; i++) {
    if (numArray.length == 1) {
      console.log("Yes");
      return;
    }
    if (numArray[i] <= numArray[i - 1]) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
  return;
}

// テスト用の入力文字列
const test_input = `10
1 2 3 5 8 13 21 34 55
`; // ここに入力したい値を記述

// テスト時はこちらを使う
main(test_input);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
