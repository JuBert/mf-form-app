import { useState } from 'react'

import Button from 'remoteApp/Button'
import InputText from 'remoteApp/InputText'
import InputDate from 'remoteApp/InputDate'

function App() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  return (
    <div className='w-full'>
      <h1 className='text-3xl w-full'>Host app</h1>
      <div className='bg-neutral-700 mt-6 p-6 rounded-lg space-y-4'>
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
      </div>
    </div>
  )
}

export default App
