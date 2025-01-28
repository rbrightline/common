export function max(...nums: number[]): number {
  let m = nums[0];
  for (const v of nums) if (v > m) m = v;
  return m;
}
