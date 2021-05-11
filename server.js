const express = require('express');
const exphbs = require("express-handlebars");

const app = express();

// app.engine("handlebars", exphbs({
// 	defaultLayout: "main"
// }));

// app.set("view engine", "handlebars");
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(express.static('public'));

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
	
	res.render("about.handlebars");
});

app.get("/findBooks", (req, res) => {
	
	res.render("contact.handlebars");
});

app.listen(port, () => {

	console.log("Server is running on port " +port);
});
