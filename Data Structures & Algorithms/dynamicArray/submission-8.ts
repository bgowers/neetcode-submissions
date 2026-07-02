class DynamicArray {
    private array: number[];
    private size: number;
    private capacity: number;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        console.log('arr', this.array)
        if (this.size === this.capacity) {
            console.log('resized')
            this.resize();
        }
        this.array[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.size--;
        return this.array[this.size];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        let newArr = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.array[i];
        }
        this.array = newArr;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}