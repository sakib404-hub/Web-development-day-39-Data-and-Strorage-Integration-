import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/Bottles'

const bottles = async () => {
  const url = '../public/bottles.json'
  const res = await fetch(url)
  return res.json();
}

function App() {
  const bottlePromise = bottles();
  return (
    <>
      <h1 style={{
        textAlign: 'center'
      }}>Buy Awesome Water Bottles</h1>
      <Suspense fallback={<p>Bottles Are Loading</p>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
