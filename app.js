const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('./public'));

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/support', (req,res) => {
    res.render('support');
});

app.get('/whats-new', (req,res) => {
    res.render('whats-new');
});

app.get('/games', (req,res) => {
    const data = [
        {
            header: 'FAIRY TAIL 2',
            note: "Gust",
            image: "FT2-Featured-290x358.jpg",
            firstSpan : "PS4",
            notFirstSpan : ['PS5','Steam','Switch'],
            comingSoon : true,
        },
        {
            header: 'DYNASTY WARRIORS: ORIGINS',
            note: " ",
            image: "DWO-Featured-290x358.jpg",
            firstSpan : "PS5",
            notFirstSpan : ['Steam','Xbox Series X|S'],
            comingSoon : true,
        },
        {
            header: 'ROMANCE OF THE THREE KINGDOMS 8 REMAKE',
            note: "KOU SHIBUSAWA",
            image: "RTK8-Featured-290x358.jpg",
            firstSpan : "PS4",
            notFirstSpan : ['PS5','Steam','Switch'],
            comingSoon : true,
        },
        {
            header: 'SMAURAI WARRIORS 4 DX',
            note: "Omega Force",
            image: "sw4dx_game_ft-290x358.jpg",
            firstSpan : "Steam",
            notFirstSpan : [],
            recently : true,
        },
        {
            header: 'WO LONG: FALLEN DYNASTY COMPLETE EDITION',
            note: "Team NINJA",
            image: "WoLongCE_GamePage-290x358.jpg",
            firstSpan : "Microsoft",
            notFirstSpan : ['PS4','PS5','Steam','Xbox One','Xbox Series X|S'],
            recently : true,
        },
        {
            header: 'FATE/SAMURAI REMNANT',
            note: "Omega Force",
            image: "FSR-Featured-290x358.jpg",
            firstSpan : "PS4",
            notFirstSpan : ['PS5','Steam','Switch'],
            recently : true,
        },
        {
            header: "NOBUNAGA'S AMBITION: AWAKENING",
            note: "KOU SHIBUSAWA",
            image: "nobunaga_awakening_game_ft-1-290x358.jpg",
            firstSpan : "PS4",
            notFirstSpan : ['Steam','Switch'],
            recently : true,
        },
        {
            header: 'FATE/SAMURAI REMNANT',
            note: "Omega Force",
            image: "AtelierMarie-Featured-290x358.jpg",
            firstSpan : "PS4",
            notFirstSpan : ['PS5','Steam','Switch'],
            recently : true,
        },
        {
            header: 'ATELIER RYZA 3: ALCHEMIST OF THE END & THE SECRET KEY',
            note: "Gust",
            image: "Featured-AR3-290x358.jpg",
            firstSpan : "PS4",
            notFirstSpan : ['PS5','Steam','Switch'],
        },
        {
            header: 'FATAL FRAME: MASK OF THE LUNAR ECLIPSE',
            note: " ",
            image: "Featured-FFMOTLE-290x358.jpg",
            firstSpan : "PS4",
            notFirstSpan : ['PS5','Steam','Switch','Xbox One', 'Xbox Series X|S'],
        }
    ]
    res.render('games', {
        data
    });
});

app.use((req,res) => {
    res.status(404).send('<h1>Error 404</h1>');
});

const PORT =3000;
app.listen(PORT, () => {
    console.log(`server is running on http://127.0.0.1:${PORT}`)
})