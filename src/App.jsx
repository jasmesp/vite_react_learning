import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import solar from '/src/flawless_solar.png'

function App() {
    const [ count, setCount ] = useState(0)
    const [ sexy, setSexy ] = useState("Sexy!")
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello Vite + React!</p>
                <p><img src={solar} className="Solar" alt="solar"/></p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 2 ** 6)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                    <button type={'submit'} onClick={() => {
                        setSexy((sexy) => `${sexy} SEXY`);
                    }}>{sexy}</button>
                </p>
                <p>
                    Edit <code>App.jsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite DocsSSSS


                    </a>
                </p>
            </header>
        </div>
    )
}

export default App
