import abi from './certificate.json'


export const contractABI = abi.abi;
export const contractAddress = '0x137f615F479C2733989EE08a79D7C10B683059bb'

export const admin = {
  "email": "admin@example.com",
  "password": "12345678"
}


export const shortenAddress = (address) => {
  return `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`
}