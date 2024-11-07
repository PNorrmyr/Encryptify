import React from 'react';
import axios from 'axios';

function EncryptButton({ inputText, setEncryptedText, setError, isOverLimit }) {
  const handleEncrypt = async () => {

    try { 
      if (!inputText || inputText.trim() === '' || inputText == null) {
        setError("Please enter text to encrypt.");
        return;
      }
      if (inputText.length > 100) {
        setError("Input text cannot be more than 100 characters.");
        return;
      }

      const response = await axios.post('http://localhost:8080/api/crypter/v1/encrypt', inputText, {
                headers: {
                    'Content-Type': 'text/plain',
                },
            });
            setEncryptedText(response.data);
    } catch (error) {
      console.log("Error encrypting text", error);

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
   <button  className={`encrypt-btn ${isOverLimit ? 'btn-red' : 'btn-green'}`} onClick={ handleEncrypt } disabled = { isOverLimit }>Encrypt</button>
  )
}

export default EncryptButton
