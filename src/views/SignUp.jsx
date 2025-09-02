import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp(){
  const [form,setForm] = useState({
    name:'', phone:'', email:'', password:'', company:'', agency:'yes'
  })
  const nav = useNavigate()
  const update = (k,v) => setForm(s=>({...s,[k]:v}))
  const canSubmit = form.name && form.phone && form.email && form.password

  return (
    <div>
      <h2 className="h1" style={{fontSize:26}}>Create your<br/>PopX account</h2>

      <div className="form-group">
        <label className="label">Full Name *</label>
        <input className="input" placeholder="Marry Doe" value={form.name} onChange={e=>update('name',e.target.value)} />
      </div>
      <div className="form-group">
        <label className="label">Phone number *</label>
        <input className="input" placeholder="9876543210" value={form.phone} onChange={e=>update('phone',e.target.value)} />
      </div>
      <div className="form-group">
        <label className="label">Email address *</label>
        <input className="input" placeholder="marry@example.com" value={form.email} onChange={e=>update('email',e.target.value)} />
      </div>
      <div className="form-group">
        <label className="label">Password *</label>
        <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={e=>update('password',e.target.value)} />
      </div>
      <div className="form-group">
        <label className="label">Company name</label>
        <input className="input" placeholder="Company Inc." value={form.company} onChange={e=>update('company',e.target.value)} />
      </div>

      <div className="form-group">
        <label className="label">Are you an Agency? *</label>
        <div className="radio-row">
          <label className="radio">
            <input type="radio" name="agency" checked={form.agency==='yes'} onChange={()=>update('agency','yes')} /> Yes
          </label>
          <label className="radio">
            <input type="radio" name="agency" checked={form.agency==='no'} onChange={()=>update('agency','no')} /> No
          </label>
        </div>
      </div>

      <button className="btn btn-primary" disabled={!canSubmit} style={{opacity: canSubmit?1:.5}} onClick={()=>nav('/account',{state:{profile:form}})}>
        Create Account
      </button>
    </div>
  )
}