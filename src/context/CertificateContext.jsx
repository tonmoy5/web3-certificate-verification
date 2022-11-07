import React, { createContext, useEffect, useState } from 'react'
import { ether, ethers } from 'ethers';
import { contractAddress, contractABI } from '../utils/constants'


export const CertificateContext = createContext();


const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const certificateContract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log({
    provider,
    signer,
    certificateContract
  })
}


export const CertificateProvider = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({ candidate_name: '', academi: '', course_name: '', passing_year: '', gred: '' });

  const handelChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  }

  const checkIfWalletConnected = async () => {
    // First Check if user has Metamask on his/her system
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log("No account available");
      }
      console.log(accounts)
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object available");
    }
  }

  // Function to Connect the accounts
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      throw new Error("No ethereum object found");
    }
  }

  // Add New Certificate
  const addNewCertificate = async () => {
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");

      // Get certificate Data from the Form
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  }

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <CertificateContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handelChange, isAdmin, setIsAdmin }}>
      {children}
    </CertificateContext.Provider>
  )
}