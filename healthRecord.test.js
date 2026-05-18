const { ListNode, isHealthRecordSymmetric } = require('./healthRecord');

// Helper function
function createList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// NORMAL TEST CASES

test('Palindrome odd length', () => {
  const list = createList([80, 90, 100, 90, 80]);
  expect(isHealthRecordSymmetric(list)).toBe(true);
});

test('Palindrome even length', () => {
  const list = createList([70, 85, 85, 70]);
  expect(isHealthRecordSymmetric(list)).toBe(true);
});

test('Not a palindrome', () => {
  const list = createList([70, 80, 90]);
  expect(isHealthRecordSymmetric(list)).toBe(false);
});

// EDGE TEST CASES

test('Empty list', () => {
  const list = createList([]);
  expect(isHealthRecordSymmetric(list)).toBe(true);
});

test('Single node', () => {
  const list = createList([90]);
  expect(isHealthRecordSymmetric(list)).toBe(true);
});

test('Two different nodes', () => {
  const list = createList([90, 100]);
  expect(isHealthRecordSymmetric(list)).toBe(false);
});
