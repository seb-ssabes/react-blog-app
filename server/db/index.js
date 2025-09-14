const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose
  .connect(
    'mongodb+srv://olivaresheredia_db_user:oJvOPzr19FirgiIx@reactblogapp.hwwhhdi.mongodb.net/'
  )
  .then(() => console.log('Connected mongo db'))
  .catch((e) => console.log(e))
