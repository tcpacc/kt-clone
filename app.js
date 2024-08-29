const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

// const hbs = handlebars.create();
// hbs.handlebars.registerHelper('add', (a,b) => a+b);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('./public'));

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/games', (req,res) => {
    res.render('games', {
        title: "main page",
        message: 'Howdy handlebars!',
    });
});

app.use((req,res) => {
    res.status(404).send('<h1>Error 404</h1>');
});

const PORT =3000;
app.listen(PORT, () => {
    console.log(`server is running on http://127.0.0.1:${PORT}`)
})