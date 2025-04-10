import { useCallback, useState ,useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

const generatePassword = useCallback(()=>{
 let pass=''
 let str= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if(numberAllowed) str += '0123456789'
  if(charAllowed) str += '!@#$%^&*()_+[]{}|;:,.<>?'
  for(let i=1;i<length;i++){
    const char =Math.floor(Math.random() * str.length +1)
    pass+= str.charAt(char)
  }
  setPassword(pass)
},[length, numberAllowed, charAllowed])

useEffect(() =>{
  generatePassword()
},[length, numberAllowed, charAllowed])


const copyPassword = () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
}
const passwordRef = useRef(null)
  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px4 py-3 my-8 bg-grey-800 text-blue-500'> 
   <h1 className='text-white text-center my-3'>Password Generator</h1>
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
    type="text" 
    value={password}
    className='w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none'
    placeholder='Generated Password'
    ref={passwordRef}
    readOnly
    />
    <button onClick={copyPassword}   className='bg-blue-500 text-white px-4 py-2 hover:bg-blue-600'>
      copy
    </button>
   </div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-2'>
    <input 
    type="range"
    min={6}
    max={20}
    value={length}
    className='cursor-pointer'
    onChange={(e) => setLength(e.target.value)}
    name=""
    id=""
     />
     <label htmlFor="length" className='text-white'>Length: {length}</label>
  </div>
  <div className='flex items-center gap-x-2'>
    <input 
    type="checkbox"
    defaultChecked={numberAllowed}
    onChange={() => setNumberAllowed((prev) => !prev)}
    className='cursor-pointer' 
    name="" 
    id="" 
    />
    <label htmlFor="number" className='text-white'>Numbers{numberAllowed}</label>
  </div>
  <div className='flex items-center gap-x-2 px-3'>
    <input 
    type="checkbox"
    defaultChecked={charAllowed}
    onChange={() => setCharAllowed((prev) => !prev)}
    className='cursor-pointer' 
    name="" 
    id="" 
    />
    <label htmlFor="character" className='text-white'>Character</label>
  </div>
   </div>
    </div>
  )
}

export default App
