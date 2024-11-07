import { useState } from 'react'
import './App.css'
import InputField from './InputField'
import EncryptButton from './EncryptButton'
import DecryptButton from './DecryptButton'

function App() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    
    setInputText(value);
    if (value.length > 100) {
      setError('Encryption is limited to 100 characters. You can still decrypt text longer than 100 characters.');
    } else {
      setError('');
      setDecryptedText('');
      setEncryptedText('');
    }
  }

  const isOverLimit = inputText.length > 100;
  console.log("Is over limit:", isOverLimit);

  return (
    <div className='app'>
      <h1>Encrypter</h1>
      <InputField value = { inputText } onChange={ handleInputChange } setError = { setError }/>
      <EncryptButton inputText = { inputText } setEncryptedText = { setEncryptedText } 
                     setError = { setError } isOverLimit = { isOverLimit }/>
      <DecryptButton encryptedText = { encryptedText || inputText } 
                     setDecryptedText = { setDecryptedText } setError={ setError }
                     isOverLimit = { isOverLimit }/>

      <h3>Encrypted Text: </h3>
      <p className='encrypted-text'>{encryptedText}</p>

      <h3>Decrypted Text:</h3>
      <p className='decrypted-text'>{decryptedText}</p>

      {error && <p className='error'> {error} </p>}
    </div>
  )
}

export default App
