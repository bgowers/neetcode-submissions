
// Definition for singly-linked list.
// class ListNode {
//     val
//     next

//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }


class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode | null {
        let prev: ListNode | null = null
        let curr: ListNode | null = head

        while (curr !== null) {
            const next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        }

        return prev
    }

}



