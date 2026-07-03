class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        const pairs: Record<string, string> = {
            ')': '(',
            ']': '[',
            '}': '{'
        };


        for (const bracket of s) {
            if (['(', '[', '{'].includes(bracket)) {
                stack.push(bracket)
            } else {
                if (stack.length === 0) return false
                const top = stack.pop()
                if (top !== pairs[bracket]) return false
            }
        }

        return stack.length === 0
    }
}
