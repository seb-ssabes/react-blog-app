import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import AddBlog from './pages/add-blog'
import axios from "axios";

async function testApi() {
  try {
    const res = await axios.get("/api");  // should hit server /api route
    console.log("API response:", res.data);
  } catch (err) {
    console.error("API error:", err.response?.status, err.response?.data);
  }
}

testApi();

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
