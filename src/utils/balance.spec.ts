import { roundBalance } from './balance'

describe('roundBalance', () => {
  test('should return an empty string if balance is undefined', () => {
    expect(roundBalance(undefined)).toBe('')
  })

  test('should return an empty string if balance is an empty string', () => {
    expect(roundBalance('')).toBe('')
  })

  test('should round the balance to the default precision of 6', () => {
    const balance = '12345.6789'
    const expected = '12345.7'
    expect(roundBalance(balance)).toBe(expected)
  })

  test('should round the balance to a custom precision', () => {
    const balance = '12345.6789'
    const precision = 4
    const expected = '1.235e+4'
    expect(roundBalance(balance, precision)).toBe(expected)
  })

  test('should handle rounding for small numbers', () => {
    const balance = '0.0000123456789'
    const expected = '0.0000123457'
    expect(roundBalance(balance)).toBe(expected)
  })

  test('should handle rounding for very large numbers', () => {
    const balance = '123456789012345.6789'
    const expected = '1.23457e+14'
    expect(roundBalance(balance)).toBe(expected)
  })

  test('should handle rounding for negative numbers', () => {
    const balance = '-12345.6789'
    const expected = '-12345.7'
    expect(roundBalance(balance)).toBe(expected)
  })

  test('should handle rounding for zero', () => {
    const balance = '0'
    const expected = '0.00000'
    expect(roundBalance(balance)).toBe(expected)
  })

  test('should handle rounding with custom precision for zero', () => {
    const balance = '0'
    const precision = 3
    const expected = '0.00'
    expect(roundBalance(balance, precision)).toBe(expected)
  })

  test('should return scientific notation for large precision values', () => {
    const balance = '12345.6789'
    const precision = 10
    const expected = '12345.67890'
    expect(roundBalance(balance, precision)).toBe(expected)
  })

  test('should handle rounding with precision greater than balance length', () => {
    const balance = '123.45'
    const precision = 10
    const expected = '123.4500000'
    expect(roundBalance(balance, precision)).toBe(expected)
  })
})
