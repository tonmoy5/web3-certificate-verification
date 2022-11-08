import abi from './certificate.json'


export const contractABI = abi.abi;
export const contractAddress = '0x8a49903deA089Bd41B5BCbB0620b1704CAA56227'

export const admin = {
  "email": "admin@example.com",
  "password": "12345678"
}


export const shortenAddress = (address) => {
  return `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`
}