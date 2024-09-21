import express from "express";
import morgan from "morgan";

// create an express app
const app = express()
app.use(morgan('dev'));

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

app.get("/shoes", (req, res) => {

    let finalArr = [];

    let minPrice;
    let maxPrice;
    let shoeType;

    let finalString;

    // access query params
    if (req.query.minprice) {
        minPrice = +req.query.minprice;
    }
    if (req.query.maxprice) {
        maxPrice = +req.query.maxprice;
    }
    if (req.query.type) {
        shoeType = req.query.type;
    }

    // filtering the array three times
    finalArr = shoes.filter((shoe) => {
        
        if (minPrice) {
            return shoe.price >= minPrice;
        } else { return shoe };

    }).filter((shoe) => {

        if (maxPrice) {
            return shoe.price <= maxPrice;
        } else { return shoe };
        

    }).filter((shoe) => {
        
        if (shoeType) {
            return shoeType === shoe.type;
        } else { return shoe };
    })

    // if search was not matched
    if (finalArr.length === 0 && (minPrice || maxPrice || shoeType)) {
        finalString = '<li style="color: red;">Nothing matched your search.</li>'
    } // if nothing was passed as query
    else if (finalArr.length === 0) {
        shoes.forEach((shoe) => {
            finalArr.push(shoe);
        })
    }
    
    // create final string with <li>
    if (!finalString) {
        finalString = finalArr.map((obj) => {
            return `<li style="color: mediumseagreen;">${obj.type}s ${obj.name} for ${obj.price} USD</li>`
        })

        finalString = finalString.join('')
    }

    // send
    res.send(`<h1 style="color: hotpink;">Your results include:</h1>
        <ul style="color: mediumseagreen;">${finalString}</ul>
        `);

})

/* TEST:

http://localhost:3000/shoes?type=sandal
http://localhost:3000/shoes?type=sandal&minprice=25
http://localhost:3000/shoes?type=sandal&minprice=500&maxprice=70
http://localhost:3000/shoes?type=heel&minprice=100
http://localhost:3000/shoes?maxprice=500&minprice=25
http://localhost:3000/shoes
http://localhost:3000/shoes?type=super
*/