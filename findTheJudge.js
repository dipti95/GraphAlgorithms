function findJudge(n, trust) {
  const trustedByPeople = Array(n + 1).fill(0); // SC: O(n)
  const map = new Map(); // SC: O(n)
  trust.forEach(([trustee, trusted]) => {
    // TC: O(n)
    map.set(trustee, trusted);
    ++trustedByPeople[trusted];
  });
  for (let i = 1; i <= n; ++i) {
    // TC: O(n)
    const person = i;
    if (trustedByPeople[person] === n - 1 && !map.has(person)) {
      return person;
    }
  }
  return -1;
}
