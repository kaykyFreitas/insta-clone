import './App.css'
import { Aside } from './components/Aside'
import { Header } from './components/header'
import { Feed } from './components/Feed'
import { Post } from './components/post'
import { Stories } from './components/storie'


function App() {



  return (
    <div className="App">
      <Header />
      <Aside />
      <Feed />

    </div>
 
  )
}

export default App


/*

const [count, setCount] = useState(0)

<button type="button" onClick={() => setCount((count) => count + 1)}>
  count is: {count}
</button>

*/