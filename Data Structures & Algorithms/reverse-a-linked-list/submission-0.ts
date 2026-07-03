
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
        if (head === null || head.next === null) {
            return head;
        }

        const newHead = this.reverseList(head.next);

        head.next.next = head;
        head.next = null;

        return newHead;
    }

}



