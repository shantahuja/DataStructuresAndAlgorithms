function factorial(n) {
  if (n == 0) {
    return 1;
  }
  for (let i = n - 1; i > 1; i--) {
    n *= i;
  }
  return n;
}

// time complexity: O(1.5n) ~ O(n)
function countPairs(numbers, k) {
  let nums = new Map();

  // all cases: O(n)
  for (let i = 0; i < numbers.length; i++) {
    if (nums.has(numbers[i])) {
      nums.set(numbers[i], true);
    } else {
      nums.set(numbers[i], false);
    }
  }

  // average case: O(n) ~ O(n/2)
  // best case: O(1)
  // worse case: O(n)
  let pairs = 0;
  for (const key of nums.keys()) {
    if (k == 0 && nums.get(key)) {
      pairs += 1;
    } else if (k != 0 && nums.has(key + k)) {
      pairs += 1;
    }
  }

  // pairs += factorial(nums.size) / (factorial(2) * factorial(nums.size - 2));
  return pairs;
}

function main() {
  // (1,1), (1,2), (2,1)
  // {1: true, 2: false}
  console.log(countPairs([1, 1, 1, 2], 1) == 1);

  // (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
  // a + k = b
  // 1 + 3 = 4 (1, 4)
  console.log(countPairs([1, 2, 3, 4], 3) == 1);

  // no possible way for a + k = b pair! 1+4=5
  console.log(countPairs([1, 2, 3, 4], 4) == 0);

  // 1 + 2 = 3 (1, 3)
  // 2 + 2 = 4 (2, 4)
  console.log(countPairs([1, 2, 3, 4], 2) == 2);

  // 1 + 1 = 2 (1, 2)
  // 2 + 1 = 3 (2, 3)
  // 3 + 1 = 4 (3, 4)
  console.log(countPairs([1, 2, 3, 4], 1) == 3);

  // 1 + 0 = 1
  // 2 + 0 = 2
  console.log(countPairs([1, 2, 3, 4], 0) == 0);

  // 2 + (-1) = 1 (2,1)
  // 3+ (-1) = 2 (3,2)
  // 4 + (-1) = 3 (4,3)
  console.log(countPairs([1, 2, 3, 4], -1) == 3);

  //   console.log(countPairs[0, 0, 0, 0], i);

  //   console.log((factorial(n) / factorial(r)) * factorial(n - r));
  //   console.log(factorial(n+r-1) / (factorial(r) * factorial(n-1))); // doesn't work

  //   (2 + 2 - 1)! / (2!(2-1)!))
  /* for (let i = 0; i <= 4; i++) {
      // (1,2), (1,3), (1,4), (2,3), (2,4), (3,4)
      // (n-1)! = (4-1)! = 6
      console.log(countPairs([1, 2, 3, 4], i));

      // (0,0)
      console.log(countPairs[0, 0, 0, 0], i);
  }*/
}

main();
