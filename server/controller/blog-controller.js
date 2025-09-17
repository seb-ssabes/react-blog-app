const mongoose = require('mongoose')
const Blog = require('../model/Blog')

//fetch list of blogs
//add a new blog
//delete a blog
//update a blog


const fetchListOfBlogs = async (req, res) => {
  let blogList
  try {
    blogList = await Blog.find()

  } catch (error) {
    console.log(error)
  }

  if (!blogList) {
    return res.status(404).json({ message: "No Blogs Found" })
  }

  return res.status(200).json(blogList)
}

const addNewBlog = async (req, res) => {
  console.log("addNewBlog called");
  console.log("Request body:", req.body);

  const { title, description } = req.body;
  const currentDate = new Date();

  const newlyCreatedBlog = new Blog({
    title,
    description,
    date: currentDate
  });

  try {
    const savedBlog = await newlyCreatedBlog.save();
    console.log("Blog saved successfully:", savedBlog);

    return res.status(200).json(savedBlog);
  } catch (err) {
    console.error("Error saving blog:", err);
    return res.status(500).json({ message: err.message });
  }
};


const deleteBlog = async(req, res) => {
  const id = req.params.id
  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id)
    if(!findCurrentBlog) {
      return res.status(404).json({message: 'Blog not found'})
    }
    return res.status(200).json({message: 'Succesfully deleted'})
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Unable to delete. Please try again'})
  }
}

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  try {
    // Update the blog and return the updated document
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } // <- ensures the returned document is the updated one
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // ✅ Return a response so Axios resolves
    return res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return res.status(500).json({ message: "Something went wrong while updating" });
  }
};


module.exports = {fetchListOfBlogs, deleteBlog, updateBlog, addNewBlog}
