import React from 'react';
import axios from 'axios';


function DecryptButton({ encryptedText, setDecryptedText, setError }) {
  const handleDecrypt = async () => {
    try {
      if (!encryptedText || encryptedText.trim() === '' || encryptedText == null) {
        setError("Please enter text to decrypt.");
        return;
      }
      const response = await axios.post('http://localhost:8080/api/crypter/v1/decrypt', encryptedText, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      setDecryptedText(response.data);
    } catch (error) {
      console.error("Error decrypting text:", error);
      if(error.response){
        setError(error.response.data?.message || "Error occured on the server."); 
      } else if(error.request){
        setError("No response from server. Try again later.");
      } else {
        setError(error.message || "An unknown error occured.")
      }
    }
  };

  return (
    <button className="decrypt-btn" onClick={ handleDecrypt }>Decrypt</button>
  )
}

export default DecryptButton
