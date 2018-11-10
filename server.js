const express = require('express');
const hbs = require('hbs');

const port  = process.env.PORT || 3000;
let app =  express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/', (request, response) => {
    response.send({
        name: 'Express',
        cities: ['Mumbai', 'Pune']
    });
});

app.get('/about', (req, res) => {
    //res.send('This is about page');
    res.render('about.hbs', {
        pageTitle: 'About Page',
        headerName: 'The Coke Studio'
    });
});
app.get('/home', (req, res) => {
    res.render('home.hbs',{
        pageTitle: 'Home',
        userName: 'Vivek'
    });
});
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Page is not available'
    });
});

app.listen(port, () => {
    console.log(`server is up on ${port}`);
});