
import {useState} from 'react'
import {redirect} from 'next/navigation'


function Home() {
  const [gameToken, setGametoken] = useState('')
  return (
    <main>
      <h1 className='title'>BlackJack online</h1>
      <input placeholder='Game ID' type="text" value={gameToken} onChange={(e) => setGametoken(e.target.value)} />
      <a href={`/game/${gameToken}`}>join</a>
    </main>
  )
}

export default Home
