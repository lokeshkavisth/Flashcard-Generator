import React,{useState} from 'react';
import { BiCopyAlt } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { FiShare2 } from "react-icons/fi";
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"


function Modal({ modalPop }) {
  const [Link, setLink] = useState(window.location.href);
  


const textLink=(e)=>{
  navigator.clipboard.writeText(Link)
  alert('Link is Copied')
  setLink(e.target.value)
}
  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center">
      <div className="mx-7 lg:w-96 lg:h-60 bg-white rounded-lg outline-none align-middle ">
        <div className="flex  justify-end m-3 opacity-50 hover:opacity-100">
          <button onClick={() => modalPop(false)} className="close">
            <VscChromeClose />
          </button>
        </div>

        <span className="text-lg font-semibold px-7">Share</span>

        <div className="my-4 px-7 flex items-center justify-center ">
          <input
            className="border-2 border-dashed rounded-md  w-full py-2 px-2 pr-3 font-semibold text-sm "
            type="text"
            value={Link}
          />
          <button className="flex items-center justify-center  opacity-60 mx-4">
          <BiCopyAlt onClick={textLink} className="text-2xl  hover:opacity-70" /> 
          <FiShare2 className="text-lg ml-4" /> 
          </button>
        </div>
        <div className="icons">
          <ul className="flex items-center justify-around px-6 py-6">
          <div className="bg-gray-200 p-1.5 rounded-md">
            <div className="bg-blue-600  rounded-md p-0.5 absolute-center">
              <a href="/Facebook">
                <FaFacebookF className=" cursor-pointer text-white"/>
              </a>
            </div>
            </div>
            <div className="bg-gray-200 p-1.5 rounded-md">
            <div className="bg-blue-600 rounded-md p-0.5 absolute-center">
              <a href="/Linkedin">
                <FaLinkedinIn className="text-white"/>
              </a>
            </div>
            </div>
            <div className="bg-gray-200 p-1.5 rounded-md">
            <div className=" bg-green-500 rounded-md p-0.5 absolute-center">
              <a href="/whatsapp">
                <FaWhatsapp className="text-white"/>
              </a>
            </div>
            </div>
            <div className="bg-gray-200 p-2 rounded-md absolute-center">
              <a href="/Twitter">
                <FaTwitter className="text-blue-600"/>
              </a>
            </div>
            
            <div className="bg-gray-200 p-2 rounded-md absolute-center">
              <a href="/Envolope">
                <FaEnvelope className="opacity-50"/>
              </a>
            </div>
          </ul>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Modal;