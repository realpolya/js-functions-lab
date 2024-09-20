import express from "express";
import morgan from "morgan";

// create an express app
const app = express()
app.use(morgan('dev'));

//console.log(app)

/* TO REACH: localhost:3000

set event listener for server
app.listen(arg1, arg2)
arg1 = port
arg2 = callback function
*/

app.listen(3000, () => {
    console.log("Listening on port 3000!!");
});

// Exercise 1
app.get("/greet/:name", (req, res) => {
    res.send(`<h1 style="color: mediumseagreen; font-size: 3rem; text-decoration: underline; margin: auto; text-align: center;">Welcome, ${req.params.name}!</h1>`);
})

// Exercise 2
app.get("/roll/:num", (req, res) => {

    if (+req.params.num - (+req.params.num) === 0) {
        let x;

        x = Math.floor(Math.random() * (+req.params.num))

        res.send(`<h1 style="color: mediumseagreen; text-align: center;">
            You input ${req.params.num}, we respond with ${x}!</h1>`);

    } else {

        res.send(`<h1 style="color: mediumseagreen; text-align: center;">
            Please put in a number!</h1>`);

    }

})

// Exercise 3
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get("/collect/:index", (req, res) => {
    
    let i = +req.params.index
    console.log(typeof(i))

    if (i < collectibles.length) {
        
        res.send(`<p style="color: mediumseagreen; text-align: center;">
            So, you would like to get ${collectibles[i].name}? You can get it for ${collectibles[i].price}!
            </p>`);

    } else {

        res.send(`<p style="color: mediumseagreen; text-align: center;">
            This item is not in stock! Check back later!
            </p>`);

    }
})

// Exercise 4
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

// ?param=something&param=something
// http://localhost:3000/hello?name=Polya&age=27
app.get("/shoes", (req, res) => {

    let finalArr = [];

    let toPrintMin = [];
    let toPrintMax = []; 
    let typeArray = [];

    // access query params
    const minPrice = req.query.min-price;
    const maxPrice = req.query.max-price;
    const shoeType = req.query.type;

    shoes.forEach((shoe) => {
        if (shoe.price > minPrice) {
            toPrintMin.push(shoe)
        }

        if (shoe.price < maxPrice) {
            toPrintMax.push(shoe)
        }

        if (shoeType === shoe.type) {
            typeArray.push(shoe);
        }
    })

    finalArr.push()


})
