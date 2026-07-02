class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length
        const ans = new Array(nums.length * 2)

        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i]
            ans[i + n] = nums[i]
        }

        return ans
    }
}
