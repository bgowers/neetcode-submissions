class ListNode {
    val: number
    next: ListNode | null

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val
        this.next = next
    }
}

class MyLinkedList {
    private head: ListNode
    private size: number

    constructor() {
        this.head = new ListNode() // dummy
        this.size = 0
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.size) return -1

        let curr = this.head.next;
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }

        return curr.val
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        this.addAtIndex(0, val)
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        this.addAtIndex(this.size, val)
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index > this.size || index < 0) return

        const newNode = new ListNode(val)

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }

        newNode.next = curr.next
        curr.next = newNode
        this.size++
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index >= this.size || index < 0) return

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }

        curr.next = curr.next.next
        this.size--
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
