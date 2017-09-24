const { add } = require('./index')

const result = add(1, 2)

try {
  console.assert(result === 2, 'result should be 3!')
  console.log('All good!')
} catch (e) {
  console.error('Fail...', e.message)
}
