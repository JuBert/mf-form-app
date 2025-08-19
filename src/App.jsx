import { useState } from 'react'
import './App.css'

import Button from 'remoteApp/Button'
import InputText from 'remoteApp/InputText'
import InputDate from 'remoteApp/InputDate'

function App() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  return (
    <>
      <h1 className='text-3xl'>Hosts app</h1>
      <InputText
        label="First Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <InputDate
        label="Date of Birth"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <Button />
    </>
  )
}

export default App
