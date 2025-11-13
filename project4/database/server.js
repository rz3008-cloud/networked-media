const express = require("express");

const bodyParser = require("body-parser");
const multer = require('multer')
const nedb = require("@seald-io/nedb");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
const uploadProcessor = multer( {dest: 'assets/upload/' })
const encodedParser = bodyParser.urlencoded( {extended: true });
app.use(encodedParser)


app.set('view engine', 'ejs')


const database = new nedb({
  filename: "database.txt",
  autoload: true,
});



// route to get the /add url
// this renders the form.ejs
app.get('/add', (req, res)=>{

  let query = {}  
  let sortQuery = {
    timestamp: -1 
  }
  database.find(query).sort(sortQuery).exec( (err, dataInDB)=>{
    console.log(dataInDB)
    if(err){
      res.render('form.ejs', {})
    }
    res.render('form.ejs', { posts: dataInDB })
  })
})

app.post('/post', uploadProcessor.single('image'), (req, res)=>{
  let currentTime = new Date()

  console.log(req.body)

  let postToBeAddedToDB = {
    date: currentTime.toLocaleString(),
    text: req.body.text,
    timestamp: currentTime.getTime()
  }

  // insert the data into the db
  database.insert(postToBeAddedToDB, (err, dataThatHasBeenAdded)=>{
    if(err){
      console.log(err)
      res.redirect('/add')
    } else {
      console.log(dataThatHasBeenAdded)
      res.redirect('/add')
    }
  })
})

app.get("/all-posts", (req, res) => {
  // let allPosts = [
  //     {text: "post 1"},
  //     {text: "post 2"},
  //     {text: "post 3"},
  // ]

  let query = {}; // this is empty because we don't want to get any specific thing

  database.find(query).exec((err, data) => {
    // send data back as json
    res.json({ posts: data });
  });
});

app.listen(7002, () => {
  console.log("server running on 7002");
});