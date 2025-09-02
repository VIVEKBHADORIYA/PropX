import { Routes, Route } from 'react-router-dom'
import PhoneFrame from './ui/PhoneFrame.jsx'
import Welcome from './views/Welcome.jsx'
import Login from './views/Login.jsx'
import SignUp from './views/SignUp.jsx'
import Account from './views/Account.jsx'

export default function App(){
  return (
    <div className="app-root">
      <PhoneFrame>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </PhoneFrame>
    </div>
  )
}