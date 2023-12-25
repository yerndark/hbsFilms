const hbs = require('hbs');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views')

const films = [ 
    { 
        id: 1, 
        title: "Чарли и шоколадная фабрика", 
        year: 2005, 
        director: "Тим Бёртон", 
        actors: ["Джонни Депп", "Фредди Хаймор", "Дэвид Келли","Хелена Бонем Картер","Джеймс Фокс","Кристофер Ли"], 
    }, 
    { 
        id: 2, 
        title: ["Джон Уик","Джон Уик - 2","Джон Уик - 3","Джон Уик - 4",], 
        year: 2014, 
        director: "Чад Стахелски", 
        actors: ["Киану Ривз", "Уиллем Дефо", "Иэн Макшейн"], 
    }, 
    { 
        id: 3, 
        title: "Джентльмены", 
        year: 2019, 
        director: "Гай Ричи", 
        actors: ["Мэттью Макконахи", "Чарли Ханнэм", "Колин Фаррелл"], 
    }, 
    { 
        id: 4, 
        title: "Легенда", 
        year: 2015, 
        director: "Брайан Хелгеленд", 
        actors: ["Том Харди", "Тэрон Эджертон", "Пол Андерсон"], 
    },
    
];
  
app.get("/", (req, res) => {
    res.render("index", { films });
});

app.get("/films/:id", (req, res) => {
    const film = films.find((film) => film.id === parseInt(req.params.id));
    if (!film) {
      res.status(404).send("Фильм не найден");
    } else {
      res.render("film", { film });
    }
});
  
app.get("/partials/navbar", (req, res) => {
    res.render("navbar");
});

app.listen(3000, () => {
    console.log('Сервер в порту 3000!');
});