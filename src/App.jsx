import { useState } from 'react'
import './App.css'
import { Div } from './components/Div/Div'
import { Button,  SecondaryButton } from './components/common/Button'

function App() {

  return (
    <>
      <Div >
        <Button>Click Me!</Button>
        <Button primary >Primary Click Me!</Button>
        <SecondaryButton >Click Me!</SecondaryButton>
        <SecondaryButton primary as={Button} href="#"  >Secondary Click Me!</SecondaryButton>
        
        <h1>Hello Vite!</h1>
      </Div>
    </>
  )
}

export default App
