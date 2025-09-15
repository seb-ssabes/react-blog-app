import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import AddBlog from './pages/add-blog'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/add-blog' element={<AddBlog/>}></Route>
      </Routes>
    </div>
  )
}

export default App
