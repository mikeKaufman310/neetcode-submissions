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
    mergeTwoLists(list1, list2) {
        // pointer on the current node of each list
        // iterate until one list is out of nodes
        // we should try to do this with no additional memory
        // m + n time
        // 1 2 4
        // 2 3
        // 1 2
        //edge case
        let p1 = list1
        let p2 = list2
        // how will we know which list is the new head when the two heads are equal?
        // boolean to keep track of this
        
        let newHead = new ListNode(0, null)
        let node = newHead
        // sort what can be sorted
        while (p1 && p2) {
            if (p1.val > p2.val) {
                node.next = p2
                p2 = p2.next
            } else if (p2.val > p1.val) {
                node.next = p1
                p1 = p1.next
            } else {
                node.next = p1
                p1 = p1.next
            }
            node = node.next
        }
        // add remaing values to list
        // p1
        if (p1) {
            node.next = p1
        }
        // p2
        if (p2 !== null) {
            node.next = p2
        }
        // output our new head
        return newHead.next
    }
}
