/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */



class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let newList: ListNode | null;
        let currList1 = list1
        let currList2 = list2

        if (list1 === null && list2 === null) return null

        if (currList1 === null) {
            newList = list2;
            currList2 = list2.next
        } else if (currList2 === null) {
            newList = list1;
            currList1 = list1.next
        } else if (list1.val < list2.val) {
            newList = list1;
            currList1 = list1.next
        } else {
            newList = list2;
            currList2 = list2.next
        }

        let currNewList = newList

        while (currList1 !== null || currList2 !== null) {
            if (currList1 === null) {
                currNewList.next = currList2
                currNewList = currNewList.next
                currList2 = currList2.next
            } else if (currList2 === null) {
                currNewList.next = currList1
                currNewList = currNewList.next
                currList1 = currList1.next
            } else if (currList1.val < currList2.val) {
                currNewList.next = currList1
                currNewList = currNewList.next
                currList1 = currList1.next
            } else {
                currNewList.next = currList2
                currNewList = currNewList.next
                currList2 = currList2.next
            }
        }

        return newList
    }
}
