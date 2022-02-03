import { useRef, useState} from 'react';
import FeedVideos from './components/FeedVideos/index.jsx'
import styles from './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>    
      <FeedVideos />
      </main>
   
    </div>
  )
}

export default App
