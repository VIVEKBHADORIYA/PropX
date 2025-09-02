import { useLocation } from 'react-router-dom'

export default function Account(){
  const { state } = useLocation()
  const profile = state?.profile || {name:'Vivek Singh ', email:'vivek@gmail.com'}

  return (
    <div>
      <div className="header">
        <h2 className="h2">Account Settings</h2>
      </div>
      <div style={{padding:'16px 0'}}>
        <div className="profile">
          <div className="avatar" style={{position:'relative'}}>
            <img src="https://dthezntil550i.cloudfront.net/yz/latest/yz2305290715120970024829036/2f701e04-f057-476f-b6ca-7c4872a873b2.png" alt="avatar"/>
            <div className="badge">✚</div>
          </div>
          <div>
            <div style={{fontWeight:700}}>{profile.name || 'Vivek singh'}</div>
            <div className="p" style={{margin:0, textTransform:'capitalize'}}>{profile.email || 'vivek@gmail.com'}</div>
          </div>
        </div>
        <p className="p" style={{marginTop:16}}>Hi there , Welcome to your account section</p>
      </div>
    </div>
  )
}