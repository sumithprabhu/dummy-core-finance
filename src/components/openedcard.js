import React, { useState } from "react";
import { FaTimes, FaExternalLinkAlt, FaCopy } from "react-icons/fa";

export default function ExpandedCard({ protocol, onCollapse }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide the message after 2 seconds
  };

  return (
    <div className="bg-[#202124] p-10 rounded-lg shadow-lg w-full max-w-2xl mx-auto relative animate-fadeIn">
      <button
        onClick={onCollapse}
        className="absolute top-7 right-7 text-white hover:text-red-500 text-2xl"
      >
        <FaTimes />
      </button>
      <div className="text-center">
        <img
          src={protocol.imageUrl}
          alt={protocol.protocolName}
          className="w-32 h-32 rounded-full mx-auto mb-6"
        />
        <h2 className="text-white text-3xl font-bold mb-6">{protocol.protocolName}</h2>
        <div className="text-left">
          <p className="text-gray-400 mb-1">Contract Address</p>
          <p className="text-white bg-[#313338] p-3 rounded-lg break-all mb-6">
            {protocol.contractAddress}
          </p>
          <p className="text-gray-400 mb-1">Query Slug</p>
          <div className="flex items-center bg-[#313338] p-3 rounded-lg mb-2">
            <div className="overflow-x-auto whitespace-nowrap">
              <p className="text-white break-all mr-2 mb-3">{`https://blitz-protocol-backend.vercel.app/api/{API_KEY}/${protocol.contractAddress}`}</p>
            </div>
            <button
              onClick={() => handleCopy(`https://blitz-protocol-backend.vercel.app/api/{API_KEY}/${protocol.contractAddress}`)}
              className="text-gray-400 hover:text-white"
            >
              <FaCopy />
            </button>
          </div>

          {copied && (
            <p className="text-[#FF8B00] text-sm mt-2 text-center">
              Slug copied to clipboard!
            </p>
          )}
          <a
            href="/api"
            className="text-[#FF8B00] hover:text-blue-700 flex items-center justify-center mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Generate API Key <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
