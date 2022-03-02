import React, { useState } from 'react'
import './App.css'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import axios from 'axios'

function App() {
  const [code, setCode] = useState('a = 0')

  const submitCode = () => {
    axios.post('http://localhost:3333/python', { code }).then((data) => {
      console.log(data)
    })
    console.log(code)
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold ">Hello world!</h1>
      <div className="abolute top-20 bottom-40 left-10 right-10 text-left">
        <CodeMirror
          value="console.log('hello world!');"
          height="200px"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            setCode(value)
            console.log(code)
          }}
        />
        <button
          className="border-2 bg-green-500 w-32 m-5"
          onClick={() => submitCode()}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default App
