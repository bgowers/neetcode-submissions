class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const newArr = new Array(arr.length);

        for (let i = 0; i < arr.length; i++) {
            let max = -1

            for (let j = arr.length - 1; j > i; j--) {
                max = Math.max(max, arr[j])
            }

            newArr[i] = max
        }

        newArr[arr.length-1] = -1

        return newArr
    }
}
