import { useContext } from 'react'
import classes from './style.module.css'
import { GlobalContext } from '../../context/GlobalContext'
import api from "../../api.js"


export default function AddNewBlog() {

  const {formData, setFormData} = useContext(GlobalContext)

  console.log(formData, "Form Data")

  async function handleSaveBlog() {
    try{
      const response = await api.post("/api/blogs/add", {
        title: formData.title,
        description: formData.description,
      });

      const result = await response.data

      console.log(result)
    }catch(e){
      console.log(e, 'add blog error')
    }
  }

  return (
    <div className={classes.wrapper}>
      <h1>Add a Blog</h1>
      <div className={classes.formWrapper}>
        <input
          type="text"
          name="title"
          id='title'
          placeholder='Enter Blog Title'
          value={formData.title}
          onChange={(e) => setFormData({
            ...formData,
            title: e.target.value
          })}
        />
        <textarea
          name="description"
          placeholder='Enter Blog description'
          id='description'
          value={formData.description}
          onChange={(e) => setFormData({
            ...formData,
            description: e.target.value
          })}

        >
        </textarea>
        <button onClick={handleSaveBlog}>Add new Blog</button>
      </div>
    </div>
  )
}
