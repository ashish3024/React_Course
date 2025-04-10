import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setColor('blue')}
            className='outline-none bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600'>
            Blue
          </button>
          <button
            onClick={() => setColor('green')}
            className='outline-none bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600'>
            Green
          </button>
          <button
            onClick={() => setColor('olive')}
            className='outline-none bg-yellow-800 text-white px-4 py-2 rounded-full hover:bg-yellow-900'>
            Olive
          </button>
          <button
            onClick={() => setColor('pink')}
            className='outline-none bg-pink-800 text-white px-4 py-2 rounded-full hover:bg-pink-900'>
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
