import { useContext, useEffect } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import api from "../../api.js"
import classes from './style.module.css'
import {FaTrash, FaEdit} from 'react-icons/fa'

export default function Home() {

  const {blogList, setBlogList, pending, setPending} = useContext(GlobalContext)

  async function fetchListOfBlogs() {
    setPending(true)
    const response = await api.get("/api/blogs")
    const result = await response.data
    console.log(result)

    if(result && result.length) {
      setBlogList(result)
      setPending(false)
    }else{
      setPending(false)
      setBlogList([])
    }
  }

  async function handleDeleteBlog(getCurrentId) {
    console.log(getCurrentId)
    const response = await api.delete(`/api/blogs/delete/${getCurrentId}`)
    const result = await response.data
    if(result?.message){
      fetchListOfBlogs()
    }
  }

  useEffect(() => {
    fetchListOfBlogs()
  }, [])

  return (
    <div>
      <h1>Blog List</h1>
      {
        pending
          ? <h1>Loading Blogs...</h1>
          : <div className={classes.blogList}>
            { blogList && blogList.length
              ? blogList.map((blogItem) => (
                <div key={blogItem._id}>
                  <p>{blogItem.title}</p>
                  <p>{blogItem.description}</p>
                  <FaEdit size={30}/>
                  <FaTrash onClick={() => handleDeleteBlog(blogItem._id)} size={30}/>
                </div>
              )) : <h3>No blogs added</h3>
            }
          </div>
      }
    </div>
  )
}
