import abi from './certificate.json'


export const contractABI = abi.abi;
export const contractAddress = '0x06Fe24E493b0Bc32bF318bB8d145389d96588Ece'

export const admin = {
  "email": "admin@example.com",
  "password": "12345678"
}


export const shortenAddress = (address) => {
  return `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`
}