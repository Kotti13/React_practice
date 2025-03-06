import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Number from './Problems/Problem6';

// impor Form from './Problems/Problem5';
import Foods from './Problems/Problem5';

function App() {
 

  return (
    <>
   
     <div>
     <h4>Problem 5</h4>
      <Foods/>
      
     </div>
     <div>
      <h3>Problem 6</h3>
     <Number/>
     </div>

    </>
  )
}

export default App
