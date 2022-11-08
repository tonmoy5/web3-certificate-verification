import abi from './certificate.json'


export const contractABI = abi.abi;
export const contractAddress = '0xa4796b6a2725B5e55Ad24C39B9bAceDB524Bb94F'

export const admin = {
  "email": "admin@example.com",
  "password": "12345678"
}


export const shortenAddress = (address) => {
  return `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`
}