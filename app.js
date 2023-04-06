const express = require("express")
const app = express();
const request = require('request');
const compression = require('compression');

let options = { maxAge: '2y' }
const minifyHTML = require('express-minify-html');

const port = process.env.PORT || 3000;

//Sets the app to use ejs engine
app.set('view engine', 'ejs');

app.set('views', 'views')

app.use(express.static('public'));

app.use(express.static('public', options))

app.use(compression());

app.use(minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyJS: true
    }
}));

// Home page
app.get('/', (req, res) => {
	const apiUrl = 'https://bible-api.com/romans%201';

	request(apiUrl, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			const bibleData = JSON.parse(body);
			const verses = bibleData.verses;
			console.log(verses)
			res.render('home', {
				title: 'home',
				verses: verses
			});
		} else {
			console.log(error);
			res.render('error');
		}
	});
});



//Detail page 
app.get('/verse/:id', (req, res) => {
	const apiUrl = `https://bible-api.com/${req.params.id}`;
	request(apiUrl, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			const bibleData = JSON.parse(body);
			const verse = bibleData.verses[0];
			console.log(verse);
			res.render('verse', {
				title: verse.book_name,
				verse: verse
			});
		} else {
			console.log(error);
			res.render('error');
		}
	});
});


//All verses 
app.get('/verses', (req, res) => {
	const apiUrl = 'https://bible-api.com/romans%201';

	request(apiUrl, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			const bibleData = JSON.parse(body);
			const verses = bibleData.verses;
			console.log(verses)
			res.render('verses', {
				title: 'Verses',
				verses: verses
			});
		} else {
			console.log(error);
			res.render('error');
		}
	});
});



//about page
app.get('/about', (req, res) => {
	res.render('aboutpage', {
		title: 'Home'
	})
})

//offline page 
app.get('/offline', (req, res) => {
	res.render('offline', {
		title: 'Offline'
	})
})



app.listen(port, () => {
	console.log(`Server is running at  http://localhost:${port}`);
});