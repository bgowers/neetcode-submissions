class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0
        let memo = 0
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                memo++
            }

            if (nums[i] === 0) {
                memo = 0
            }

            if (memo > max) max = memo
        }

        return max
    }
}
