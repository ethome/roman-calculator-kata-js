import addRomanNumerals from './addRomanNumerals'

describe('addRomanNumerals', () => {
  test('should combine I and I', () => {
    const sum = addRomanNumerals('I', 'I')
    expect(sum).toEqual('II')
  })
})
