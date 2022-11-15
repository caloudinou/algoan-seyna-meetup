// can you spot the bug?
// I'll bet ESLint's for-direction rule could
// catch it faster than you in a code review 😉
for (var i = 0; i < 10; i--) {
  console.log(i)
}

const two = '2'
// ok, this one's contrived a bit,
// but TypeScript will tell you this is bad:
const result = add(1, two)
