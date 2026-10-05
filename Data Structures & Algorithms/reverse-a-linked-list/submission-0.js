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
     * @return {ListNode}
     */
    reverseList(head) {
        // node => node
        // the only way to iterate is by going next, next, next...
        // naive solution to this would be to quadratically iterate through the existing list and construct a new list
        // can use dsa to do better
        // lifo ds => stack
        // we can push all of the nodes to stack, and then pop all => linear
        let stck = []
        // add to the stack first
        let node = head
        if (node === null) {
            return null
        }
        while (node.next !== null) {
            stck.push(node)
            node = node.next
        }
        stck.push(node)
        // let pop from the stack
        let newHead = new ListNode(stck.pop().val)
        let curNode = newHead
        while (stck.length !== 0) {
            let tempVal = stck.pop().val
            curNode.next = new ListNode(tempVal)
            curNode = curNode.next
        }
        return newHead
    }
}
