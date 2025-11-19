import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('App crashed:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center bg-slate-950 text-white p-8">
          <div className="max-w-lg text-center">
            <h1 className="text-2xl font-bold">Niečo sa pokazilo</h1>
            <p className="mt-2 opacity-80">Skús prosím obnoviť stránku. Ak problém pretrváva, použi odkaz s parametrom ?no3d=1</p>
            <a href={window.location.pathname + window.location.search + (window.location.search ? '&' : '?') + 'no3d=1'} className="inline-block mt-4 rounded-lg bg-cyan-600 px-4 py-2">Vynútiť jednoduché pozadie</a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
