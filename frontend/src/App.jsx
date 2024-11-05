import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './InputField'
import EncryptButton from './EncryptButton'
import DecryptButton from './DecryptButton'
function App() {

  return (
    <div>
      <InputField />
      <EncryptButton />
      <DecryptButton />
    </div>
  )
}

export default App
