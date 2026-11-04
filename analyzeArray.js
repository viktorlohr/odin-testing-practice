export function analyzeArray(nums) {
  // return {
  //   average: 4,
  //   min: 1,
  //   max: 8,
  //   length: 6,
  // };

  return {
    average: calculateAverage(nums),
    min: findMin(nums),
    max: findMax(nums),
    length: nums.length,
  };
}

function calculateAverage(nums) {
  return nums.reduce((acc, num) => num + acc, 0) / nums.length;
}

function findMin(nums) {
  return nums.reduce((acc, num) => (num < acc ? num : acc), nums[0]);
}

function findMax(nums) {
  return nums.reduce((acc, num) => (num > acc ? num : acc), 0);
}
