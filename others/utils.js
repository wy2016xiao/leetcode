/**
 * 生成链表的一个节点
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

/**
 * 根据传入数组生成链表并返回链表第一个
 */
function genListNode(list) {
    let res = new ListNode();
    let temp = res;
    for (let i = 0; i < list.length; i++) {
        temp.next = new ListNode(list[i]);
        temp = temp.next
    }
    return res.next;
}

module.exports = {
    ListNode,
    genListNode,
}
