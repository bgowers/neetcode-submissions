class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0
        let streak = 0
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                streak++
            } else {
                streak = 0
            }

            max = Math.max(max, streak)
        }

        return max
    }
}
