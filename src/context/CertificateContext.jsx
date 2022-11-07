import React, { createContext, useEffect, useState } from 'react'
import { ether, ethers } from 'ethers';
import { contractAddress, contractABI } from '../utils/constants'


export const CertificateContext = createContext();


const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const certificateContract = new ethers.Contract(contractAddress, contractABI, signer);

  // console.log({
  //   provider,
  //   signer,
  //   certificateContract
  // })

  return certificateContract;
}


export const CertificateProvider = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({ candidate_name: '', academi: '', course_name: '', passing_year: '', gred: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [certificateCount, setCertificateCount] = useState(localStorage.getItem('certificateCount'));

  // To get Data From form
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
      const { candidate_name, academi, course_name, passing_year, gred } = formData;
      const certificateContract = getEthereumContract();
      const certificateHash = await certificateContract.generateCertificate(candidate_name, academi, course_name, passing_year, gred);
      setIsLoading(true)
      console.log(`Loading - ${certificateHash.hash}`);
      await certificateHash.wait();
      setIsLoading(false)
      console.log(`Success - ${certificateHash.hash}`);
      const certificateCount = await certificateContract.getCertificateCount();
      setCertificateCount(certificateCount.toNumber());
      alert("Sucessfull added certificate: " + certificateHash.hash);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  }

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <CertificateContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handelChange, isAdmin, setIsAdmin, addNewCertificate, isLoading }}>
      {children}
    </CertificateContext.Provider>
  )
}