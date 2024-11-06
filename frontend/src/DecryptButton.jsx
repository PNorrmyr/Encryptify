import React from 'react';
import axios from 'axios';


function DecryptButton({ encryptedText, setDecryptedText, setError }) {
  const handleDecrypt = async () => {
    try {
      if (!encryptedText) {
        throw new Error("No encrypted text to decrypt.");
      }
      const response = await axios.post('http://localhost:8080/api/crypter/v1/decrypt', encryptedText, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      setDecryptedText(response.data);
    } catch (error) {
      console.error("Error decrypting text:", error);
      setError(error.response?.data?.message || error.message); 
    }
  };

  return (
    <button className="decrypt-btn" onClick={ handleDecrypt }>Decrypt</button>
  )
}

export default DecryptButton
