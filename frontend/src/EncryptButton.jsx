import React from 'react';
import axios from 'axios';

function EncryptButton({ inputText, setEncryptedText, setError }) {
  const handleEncrypt = async () => {
    try { 
      if (inputText.length > 100) {
        throw new Error("Input text cannot be more than 100 characters.")
      }

      const response = await axios.post('http://localhost:8080/api/crypter/v1/encrypt', inputText, {
                headers: {
                    'Content-Type': 'text/plain',
                },
            });
            setEncryptedText(response.data);
    } catch (error) {
      console.log("Error encrypting text", error);
      setError(error.response.data.message || error.message); 
    }
  };

  return (
   <button className="encrypt-btn" onClick={ handleEncrypt }>Encrypt</button>
  )
}

export default EncryptButton
