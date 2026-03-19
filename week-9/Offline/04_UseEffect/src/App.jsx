import { useEffect, useState } from 'react'
function App() {
  const [currentTab, setCurrentTab] = useState("feed")

  useEffect(() => {
    console.log("Inside the  " + currentTab);
  }, [currentTab])

  return (
    <>
    <div style={{ backgroundColor: 'blue', color: 'white' }}>
        <button onClick={() => {
          setCurrentTab('feed')
        }} style={{ color: currentTab == "feed" ? "red" : "white", marginLeft: 5 }}>Feed</button>
        <button onClick={() => {
          setCurrentTab('notification')
        }} style={{ color: currentTab == "notification" ? "red" : "white", marginLeft: 5 }}>Notifications</button>
        <button onClick={() => {
          setCurrentTab('messages')
        }} style={{ color: currentTab == "messages" ? "red" : "white", marginLeft: 5 }}>Messages</button>
        <button onClick={() => {
          setCurrentTab('jobs')
        }} style={{ color: currentTab == "jobs" ? "red" : "white", marginLeft: 5 }}>Jobs</button>
        <button onClick={() => {
          setCurrentTab('request')
        }} style={{ color: currentTab == "request" ? "red" : "white", marginLeft: 5 }}>Request</button>
      </div>
    </>
  )
}

export default App
