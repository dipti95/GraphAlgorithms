// TRY TO SOLVE BY DFS AND BFS
//

function longestConsecutiveSequence(nums) {
  if (nums.length === 0) return 0;
  nums = nums.sort((a, b) => a - b);
  let count = 1;
  let currCount = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      currCount += 1;
      count = Math.max(count, currCount);
    } else if (nums[i] === nums[i - 1]) continue;
    else currCount = 1;
  }
  return count;
}
