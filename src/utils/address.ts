const truncateAddress = (address: `0x${string}` | undefined, limitTo?: number): string => {
  if (!address) return ''
  const limit = limitTo ?? 5
  return address.substring(0, limit) + '...' + address.substring(address.length - limit)
}

export { truncateAddress }
