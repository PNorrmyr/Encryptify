import React from 'react';
import axios from 'axios';


function DecryptButton({ encryptedText, setDecryptedText }) {
  const handleDecrypt = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/crypter/v1/decrypt', encryptedText, {
                headers: {
                    'Content-Type': 'text/plain',
                },
            });
            setDecryptedText(response.data);
        } catch (error) {
            console.error("Error decrypting text:", error);
        }
    };


  return (
    <button className="decrypt-btn" onClick={ handleDecrypt }>Decrypt</button>
  )
}

export default DecryptButton
