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
    
    if (value.length > 100) {
      setError('Input text cannot be greater than 100 characters.');
    } else {
      setError('');
      setInputText(value);
    }
  }

  return (
    <div className='app'>
      <h1>Encrypter</h1>
      <InputField value = { inputText } onChange={ handleInputChange } setError = { setError }/>
      <EncryptButton inputText = { inputText } setEncryptedText = { setEncryptedText } setError = { setError }/>
      <DecryptButton encryptedText = { encryptedText } setDecryptedText = { setDecryptedText } setError={ setError }/>

      <h3>Encrypted Text: </h3>
      <p>{encryptedText}</p>

      <h3>Decrypted Text:</h3>
      <p>{decryptedText}</p>

      {error && <p className='error'> {error} </p>}
    </div>
  )
}

export default App
