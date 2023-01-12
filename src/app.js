const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000

// Public Static Path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// setting paths
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

// giving path of static pages inside public folder
app.use(express.static(static_path));

// Routing
app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/weather", (req, res) => {
    res.render('weather');
})

// * is special operator in express, runs when no above condition will match
app.get("*", (req, res) => {
    res.render('error', {
        errorMsg: "Oops...Page Not Found!"
    });
})


// listning the server
app.listen(port, () => {
    console.log(`listning on port ${port}`);
})