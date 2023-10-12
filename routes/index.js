var express = require('express');
var router = express.Router();
// var tasks=[
//   {id: 456, title: "cleaning", description: "not-done", date: 2/10/2023},
//   {id: 346, title: "walk", description: "not-done", date: 1/10/2023}
// ]
var tasks=[]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
  res.render('create');
});


router.get('/tasks', function(req, res, next) {
  res.render('tasks' , {tasks});
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.post('/create', function(req, res, next) {
  tasks.push(req.body)
  res.redirect('/tasks');
});


router.get('/delete/:index', function(req, res, next) {
tasks.splice(req.params.index,1)
res.redirect("/tasks")
});

router.get('/update/:index', function(req, res, next) {
 const todo = tasks[req.params.index]
 res.render("update", {index: req.params.index,todo})

  });

  router.post('/update/:index', function(req, res, next) {
    tasks[req.params.index]=req.body
res.redirect("/tasks")   
     });
   
module.exports = router;
