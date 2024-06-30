/* (https://bigfrontend.dev/problem/jest-assertion) */

function myExpect(input) {
  let isReversed = false

  return {
    toBe(data) {
      const isIdentical = Object.is(data, input)
      if ((!isReversed && !isIdentical || (isReversed && isIdentical))) {
        throw new Error('not match')
      }
    },
    get not() {
      isReversed = !isReversed
      return this
    }
  }
}