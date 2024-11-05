import React from 'react';
import axios from 'axios';

function EncryptButton({ inputText, setEncryptedText }) {
  const handleEncrypt = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/crypter/v1/encrypt', inputText, {
                headers: {
                    'Content-Type': 'text/plain',
                },
            });
            setEncryptedText(response.data);
    } catch (error) {
      console.log("Error encrypting text", error);
  
    }
  };

  return (
   <button className="encrypt-btn" onClick={ handleEncrypt }>Encrypt</button>
  )
}

export default EncryptButton
