import classes from './style.module.css'

export default function AddNewBlog() {
  return (
    <div className={classes.wrapper}>
      <h1>Add a Blog</h1>
      <div className={classes.formWrapper}>
        <input
          type="text"
          name="title"
          id='title'
          placeholder='Enter Blog Title'
        />
        <textarea
          name="description"
          placeholder='Enter Blog description'
          id='description'
        >
        </textarea>
        <button>Add new Blog</button>
      </div>
    </div>
  ) 
}
