import abi from './certificate.json'


export const contractABI = abi.abi;
export const contractAddress = '0x0EB5905DAca445C3968B47583e1741DfCe7404C3'

//'0xd59441a2730975DFf548BfFaA0830d9f5d82596f'

export const admin = {
  "email": "admin@certauth.tech",
  "password": "12345678"
}


export const shortenAddress = (address) => {
  return `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`
}