import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const nav = useNavigate()
  const canLogin = email.includes('@') && pass.length>=6

  return (
    <div>
      <h2 className="h1" style={{fontSize:26}}>Signin to your<br/>PopX account</h2>
      <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="form-group">
        <label className="label">Email Address</label>
        <input className="input" placeholder="Enter email address" value={email} onChange={e=>setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label className="label">Password</label>
        <input className="input" placeholder="Enter password" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
      </div>
      <button className="btn btn-primary" disabled={!canLogin} style={{opacity: canLogin?1:.5}} onClick={()=>nav('/account')}>Login</button>
    </div>
  )
}