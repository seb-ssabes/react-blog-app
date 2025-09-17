import { useContext, useEffect } from 'react'
import classes from './style.module.css'
import { GlobalContext } from '../../context/GlobalContext'
import api from "../../api.js"
import { useNavigate, useLocation } from 'react-router-dom'



export default function AddNewBlog() {

  const {formData, setFormData, isEdit, setIsEdit} = useContext(GlobalContext)
  const navigate = useNavigate()
  const location = useLocation()

  console.log(formData, "Form Data")

  async function handleSaveBlog() {
    try{
      const response = isEdit
        ? await api.put(`/api/blogs/update/${location.state.getCurrentItem._id}`, {
          title: formData.title,
          description: formData.description,
        })

        : await api.post("/api/blogs/add", {
          title: formData.title,
          description: formData.description,
      });

      console.log("Editing blog ID:", location.state?.getCurrentItem?._id)

      const result = await response.data

      console.log(result, "result")

      if(result) {
        setIsEdit(false)
        setFormData({
          title: '',
          description: ''
        })
        navigate('/')
      }
    }catch(e){
      console.log(e, 'add blog error')
    }
  }

  useEffect(() => {
    console.log(location)
    if(location.state) {
      const { getCurrentItem } = location.state
      setIsEdit(true)
      setFormData({
        title: getCurrentItem.title,
        description: getCurrentItem.description
      })
    }
  }, [location])

  return (
    <div className={classes.wrapper}>
      <h1>{isEdit ? "Edit blog" : "Add a Blog"}</h1>
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
        <button onClick={handleSaveBlog}>{isEdit ? "Edit blog" : "Add a Blog"}</button>
      </div>
    </div>
  )
}
