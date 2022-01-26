const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGODB_URI

mongoose.connect( uri || 'mongodb://localhost/note-blog', {
  //useFindAndModify: false,
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
  
});

const connection = mongoose.connection;
connection.once('open',()=>{
  console.log("MongoDB database is connected for realz")
})



mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
