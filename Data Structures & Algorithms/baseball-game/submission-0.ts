class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const record = []
        let recordPointer = 0

        for (let i = 0; i < operations.length; i++) {
            const op = operations[i]

            switch (op) {
                case '+':
                    record.push(record[recordPointer-1] + record[recordPointer-2])
                    break
                case 'D':
                    record.push(record[recordPointer-1] * 2)
                    break
                case 'C':
                    record.pop()
                    recordPointer-=2
                    break
                default:
                    record.push(+op)
                    break
            }

            recordPointer++
        }

        return record.reduce((res, n) => res+n, 0)
    }
}
