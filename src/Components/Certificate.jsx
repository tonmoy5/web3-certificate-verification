import React from 'react'
import { shortenAddress } from '../utils/constants';

const Certificate = ({ props }) => {
  const certificate = props.certificate;
  console.log(props.certificate)
  return (
    <div className="mt-10 p-5 bg-white rounded-xl md:w-[60vw] w-[90vw]">
      <h1 className="text-4xl text-center font-bold">{certificate.academi}</h1>
      <h1 className="text-5xl text-center font-bold m-2">Certificate</h1>
      <p className="mt-5 md:text-4xl text-xl p-5 text-justify">This is certify that <span className="font-bold underline">{certificate.candidate_name}</span> graduated from <span className="font-bold underline">{certificate.academi}</span> Degree in <span className="font-bold underline">{certificate.course_name}</span> in <span className="font-bold underline">{certificate.passing_year}</span> with the CGPA of <span className="font-bold underline">{certificate.gred}</span></p>
      <p className="mt-10">Certificate Id: {shortenAddress(certificate.certId)}</p>
    </div>
  )
}

export default Certificate