import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
