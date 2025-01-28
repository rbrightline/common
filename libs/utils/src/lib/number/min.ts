/**
 * Find the minimum number in the array
 * @param nums
 * @returns
 */
export function min(...nums: number[]): number {
  let m = nums[0];
  for (const v of nums) if (v < m) m = v;
  return m;
}
