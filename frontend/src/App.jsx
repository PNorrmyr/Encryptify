import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './InputField'
import EncryptButton from './EncryptButton'
import DecryptButton from './DecryptButton'
function App() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  return (
    <div className='app'>
      <h1>Encrypter</h1>
      <InputField value = { inputText } onChange={(e) => setInputText(e.target.value)}/>
      <EncryptButton inputText = { inputText } setEncryptedText = { setEncryptedText }/>
      <DecryptButton encryptedText = { encryptedText } setDecryptedText = { setDecryptedText }/>
      <h3>Encrypted Text: </h3>
      <p>{encryptedText}</p>

      <h3>Decrypted Text:</h3>
      <p>{decryptedText}</p>
    </div>
  )
}

export default App
