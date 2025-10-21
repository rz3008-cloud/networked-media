const express = require('express')
const parser = require('body-parser')
const multer = require('multer')
const path = require('path')
const app = express()
const encodedParser = parser.urlencoded({ extended: true })
app.use(encodedParser)
app.use(parser.json())
app.use(express.static('assets'))
app.use('/upload', express.static(path.join(process.cwd(), 'assets/upload')))
app.set('view engine', 'ejs')
const uploadProcessor = multer({ dest: 'assets/upload/' })

//  land
let allPosts1 = []
let allPosts2 = []
let allPosts3 = []
let allPosts4 = []
let allPosts5 = []
let allPosts6 = []

// home
app.get('/', (req, res) => res.redirect('/home'))

app.get('/home', (req, res) => {
  res.render('home.ejs')
})

// land
app.get('/land', (req, res) => {
  res.render('land.ejs')
})

//member
app.get('/members', (req, res) => {
  const combinedPosts = [
    ...allPosts1,
    ...allPosts2,
    ...allPosts3,
    ...allPosts4,
    ...allPosts5,
    ...allPosts6
  ];
  res.render('members', { allPosts: combinedPosts });
});


// -event
app.get('/events', (req, res) => {
  res.render('events.ejs')
})

// joint
app.get('/join', (req, res) => {
  res.render('join.ejs')
})

/* l1*/
app.get('/land1/post', (req, res) => res.render('land1/post.ejs'))
app.get('/land1/map', (req, res) => res.render('land1/map.ejs', { allPosts: allPosts1 }))
app.get('/land1/display', (req, res) => res.render('land1/display.ejs', { allPosts: allPosts1 }))

app.post('/land1/upload', uploadProcessor.single('theImage'), (req, res) => {
  let username = req.body.username || ''
  let post = {
    name: username,
    imgSrc: '/upload/' + req.file.filename,
    time: new Date().toLocaleString(),
    x: undefined,
    y: undefined
  }
  allPosts1.unshift(post)
  res.redirect('/land1/map')
})

app.post('/land1/map', (req, res) => {
  const x = parseFloat(req.body.x)
  const y = parseFloat(req.body.y)
  const index = allPosts1.findIndex(p => p.x === undefined && p.y === undefined)
  if (index !== -1) {
    allPosts1[index].x = x
    allPosts1[index].y = y
  }
  res.redirect('/land1/display')
})

/* l2*/
app.get('/land2/post', (req, res) => res.render('land2/post.ejs'))
app.get('/land2/map', (req, res) => res.render('land2/map.ejs', { allPosts: allPosts2 }))
app.get('/land2/display', (req, res) => res.render('land2/display.ejs', { allPosts: allPosts2 }))

app.post('/land2/upload', uploadProcessor.single('theImage'), (req, res) => {
  let username = req.body.username || ''
  let post = {
    name: username,
    imgSrc: '/upload/' + req.file.filename,
    time: new Date().toLocaleString(),
    x: undefined,
    y: undefined
  }
  allPosts2.unshift(post)
  res.redirect('/land2/map')
})

app.post('/land2/map', (req, res) => {
  const x = parseFloat(req.body.x)
  const y = parseFloat(req.body.y)
  const index = allPosts2.findIndex(p => p.x === undefined && p.y === undefined)
  if (index !== -1) {
    allPosts2[index].x = x
    allPosts2[index].y = y
  }
  res.redirect('/land2/display')
})

/* l3*/
app.get('/land3/post', (req, res) => res.render('land3/post.ejs'))
app.get('/land3/map', (req, res) => res.render('land3/map.ejs', { allPosts: allPosts3 }))
app.get('/land3/display', (req, res) => res.render('land3/display.ejs', { allPosts: allPosts3 }))

app.post('/land3/upload', uploadProcessor.single('theImage'), (req, res) => {
  let username = req.body.username || ''
  let post = {
    name: username,
    imgSrc: '/upload/' + req.file.filename,
    time: new Date().toLocaleString(),
    x: undefined,
    y: undefined
  }
  allPosts3.unshift(post)
  res.redirect('/land3/map')
})

app.post('/land3/map', (req, res) => {
  const x = parseFloat(req.body.x)
  const y = parseFloat(req.body.y)
  const index = allPosts3.findIndex(p => p.x === undefined && p.y === undefined)
  if (index !== -1) {
    allPosts3[index].x = x
    allPosts3[index].y = y
  }
  res.redirect('/land3/display')
})

/*l4 */
app.get('/land4/post', (req, res) => res.render('land4/post.ejs'))
app.get('/land4/map', (req, res) => res.render('land4/map.ejs', { allPosts: allPosts4 }))
app.get('/land4/display', (req, res) => res.render('land4/display.ejs', { allPosts: allPosts4 }))

app.post('/land4/upload', uploadProcessor.single('theImage'), (req, res) => {
  let username = req.body.username || ''
  let post = {
    name: username,
    imgSrc: '/upload/' + req.file.filename,
    time: new Date().toLocaleString(),
    x: undefined,
    y: undefined
  }
  allPosts4.unshift(post)
  res.redirect('/land4/map')
})

app.post('/land4/map', (req, res) => {
  const x = parseFloat(req.body.x)
  const y = parseFloat(req.body.y)
  const index = allPosts4.findIndex(p => p.x === undefined && p.y === undefined)
  if (index !== -1) {
    allPosts4[index].x = x
    allPosts4[index].y = y
  }
  res.redirect('/land4/display')
})

/* l5*/
app.get('/land5/post', (req, res) => res.render('land5/post.ejs'))
app.get('/land5/map', (req, res) => res.render('land5/map.ejs', { allPosts: allPosts5 }))
app.get('/land5/display', (req, res) => res.render('land5/display.ejs', { allPosts: allPosts5 }))

app.post('/land5/upload', uploadProcessor.single('theImage'), (req, res) => {
  let username = req.body.username || ''
  let post = {
    name: username,
    imgSrc: '/upload/' + req.file.filename,
    time: new Date().toLocaleString(),
    x: undefined,
    y: undefined
  }
  allPosts5.unshift(post)
  res.redirect('/land5/map')
})

app.post('/land5/map', (req, res) => {
  const x = parseFloat(req.body.x)
  const y = parseFloat(req.body.y)
  const index = allPosts5.findIndex(p => p.x === undefined && p.y === undefined)
  if (index !== -1) {
    allPosts5[index].x = x
    allPosts5[index].y = y
  }
  res.redirect('/land5/display')
})

/*l6*/
app.get('/land6/post', (req, res) => res.render('land6/post.ejs'))
app.get('/land6/map', (req, res) => res.render('land6/map.ejs', { allPosts: allPosts6 }))
app.get('/land6/display', (req, res) => res.render('land6/display.ejs', { allPosts: allPosts6 }))

app.post('/land6/upload', uploadProcessor.single('theImage'), (req, res) => {
  let username = req.body.username || ''
  let post = {
    name: username,
    imgSrc: '/upload/' + req.file.filename,
    time: new Date().toLocaleString(),
    x: undefined,
    y: undefined
  }
  allPosts6.unshift(post)
  res.redirect('/land6/map')
})

app.post('/land6/map', (req, res) => {
  const x = parseFloat(req.body.x)
  const y = parseFloat(req.body.y)
  const index = allPosts6.findIndex(p => p.x === undefined && p.y === undefined)
  if (index !== -1) {
    allPosts6[index].x = x
    allPosts6[index].y = y
  }
  res.redirect('/land6/display')
})

// server
app.listen(3000, () => console.log('server started :)'))
