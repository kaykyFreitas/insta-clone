import './App.css'
import { Aside } from './components/Aside'
import { Header } from './components/header'
import { Feed } from './components/Feed'
import { useEffect, useState } from "react";


function App() {


  const [me, setMe] = useState([]);

  useEffect( () => {
      fetch('https://api.github.com/users/kaykyFreitas')
      .then(response => response.json())
      .then(data => setMe(data))
  })


  return (
    <div className="App">
      <Header />
      <Aside userImg={ me.avatar_url } name={ me.login }  />
      <Feed />

    </div>
 
  )
}

export default App