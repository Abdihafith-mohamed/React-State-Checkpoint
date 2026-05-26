import './index.css'
import Profile from './components/Profile'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-grey-500 to-grey-800 flex items-center justify-center p-5">
      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">React State Checkpoint</h1>
        <Profile />
      </div>
    </div>
  )
}

export default App
