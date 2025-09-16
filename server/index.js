const express = require('express')
const cors = require('cors')
const blogRouter = require('./route/blog-route')
require('./db')

const app = express()
app.use(express.json())
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true
}));



app.use('/api/blogs', blogRouter)

app.use('/api', (req,res) => {
  res.send("Hello from backend")
})

app.listen(5000, () => console.log('App is running at 5000...'))
