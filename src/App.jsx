import { useState } from 'react'
import LoginSignUp from './components/LoginSignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginSignUp />
    </>
  )
}

export default App
