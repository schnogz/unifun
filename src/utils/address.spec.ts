import { truncateAddress } from './address'

describe('truncateAddress', () => {
  test('should return an empty string if address is undefined', () => {
    expect(truncateAddress(undefined)).toBe('')
  })

  test('should return an empty string if address is an empty string', () => {
    expect(truncateAddress('')).toBe('')
  })

  test('should truncate the address to the default limit of 5', () => {
    const address = '0x1234567890abcdef'
    const expected = '0x123...bcdef'
    expect(truncateAddress(address)).toBe(expected)
  })

  test('should truncate the address to a custom limit', () => {
    const address = '0x1234567890abcdef'
    const limitTo = 4
    const expected = '0x12...cdef'
    expect(truncateAddress(address, limitTo)).toBe(expected)
  })

  test('should handle addresses shorter than a custom limit', () => {
    const address = '0x1234'
    const limitTo = 6
    const expected = '0x1234...0x1234'
    expect(truncateAddress(address, limitTo)).toBe(expected)
  })

  test('should handle addresses with different prefix', () => {
    const address = 'abcd1234567890ef'
    const expected = 'abcd1...890ef'
    expect(truncateAddress(address)).toBe(expected)
  })
})
