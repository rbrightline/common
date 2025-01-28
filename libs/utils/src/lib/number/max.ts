/**
 * Find the maximum number in the array
 * @param nums
 * @returns
 */
export function max(...nums: number[]): number {
  let m = nums[0];
  for (const v of nums) if (v > m) m = v;
  return m;
}
