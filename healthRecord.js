class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isHealthRecordSymmetric(head) {
  if (!head || !head.next) return true;

  let slow = head;
  let fast = head;

  // Find middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let prev = null;
  let current = slow;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // Compare both halves
  let first = head;
  let second = prev;

  while (second) {
    if (first.value !== second.value) {
      return false;
    }

    first = first.next;
    second = second.next;
  }

  return true;
}

module.exports = { ListNode, isHealthRecordSymmetric };
