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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // can we assume that the passed linked list is in ascending sorted order? no
        // list nodes => next and val => val > -1001
        // we could iterate through the list and set val to -1001 and if we hit -1001 then we know theres a cycle
        // in order to iterate we need loop condition => node.next !== null => break at cycle
        let node = head
        if (!head) {
            return false
        }
        while (node.next !== null) {
            if (node.val === -1001) {
                return true
            }
            node.val = -1001
            node = node.next
        }
        return false
    }
}
