import './App.css'

import Button from 'remoteApp/Button'
import useStore from 'remoteApp/store'

function App() {
  const [count, setCount] = useStore()

  return (
    <>
      <h1 className='text-3xl'>Hosts app</h1>
      <Button />
      <div style={{ marginTop: '20px' }}>
        <button
            className='text-red-300'
            onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
