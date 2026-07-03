class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack = []
        let sum = 0

        for (const op of operations) {
            if (op === 'C') {
                sum -= stack.pop()
            } else if (op === 'D') {
                const score = stack[stack.length - 1] * 2
                stack.push(score)
                sum += score
            } else if (op === '+') {
                const score = stack[stack.length - 1] + stack[stack.length - 2]
                stack.push(score)
                sum += score
            } else {
                const score = Number(op)
                stack.push(score)
                sum += score
            }
        }

        return sum
    }
}
