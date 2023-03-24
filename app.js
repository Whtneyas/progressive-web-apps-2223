const express = require("express")


const app = express();
const port = process.env.PORT || 3000;

//Sets the app to use the handlebars engine
app.set('view engine', 'ejs');

app.set('views', 'views')

app.use(express.static('public'));

// //Get route file 
const getRouter =require ('./routes/posts');

// Tell express to use posts.js file for the routes 
app.use('/', getRouter)

// //creating the homepage
// app.get('/' , (req, res) =>{
// 	res.render('index')

// })

// // create the aboutpage

// app.get('/about', (req, res) =>{
// 	res.render('aboutpage')

// })






app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});