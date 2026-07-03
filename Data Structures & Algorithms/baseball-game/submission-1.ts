class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const record = []

        for (let i = 0; i < operations.length; i++) {
            const op = operations[i]

            switch (op) {
                case '+':
                    record.push(record[record.length-1] + record[record.length-2])
                    break
                case 'D':
                    record.push(record[record.length-1] * 2)
                    break
                case 'C':
                    record.pop()
                    break
                default:
                    record.push(+op)
                    break
            }
        }

        return record.reduce((res, n) => res+n, 0)
    }
}
