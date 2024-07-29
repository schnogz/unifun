import BigNumber from 'bignumber.js'

const roundBalance = (balance?: string, precision?: number): string => {
  if (!balance) return ''
  return new BigNumber(balance).toPrecision(precision ?? 6)
}

export { roundBalance }
