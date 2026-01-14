import { useState, useEffect } from 'react'
import './App.css'
import { format } from 'date-fns'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  })

  return (
    <div className='clock-container'>
      <div className='clock-label'>Current Time</div>
      <div className='time-display'>
        {format(currentTime, 'hh:mm:ss a')}
      </div>
      <div className='date-display'>
        {format(currentTime, 'MMMM do, yyyy')}
      </div>
    </div>
  )
}

export default App
