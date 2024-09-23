import express from 'express';
const app = express();

// global variables
const restaurant = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
        { 
            id: 1,
            name: 'Quantum Quinoa Mushroom Burger',
            price: 13.00,
            rating: 4,
            category: 'mains',
            details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
        },
        { 
            id: 2,
            name: 'Binary Berry Cheesecake',
            price: 10.11,
            rating: 3,
            category: 'desserts',
            details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
        },
        { 
            id: 3,
            name: 'Recursive Rigatoni',
            price: 17.00,
            rating: 5,
            category: 'mains',
            details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
        },
        { 
            id: 4,
            name: 'Pumpkin Pi Squared',
            price: 3.14,
            rating: 5,
            category: 'desserts',
            details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
        },
        { 
            id: 5,
            name: 'Fibonacci String Bean Fries',
            price: 11.23,
            rating: 5,
            category: 'sides',
            details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
        }
    ]
}

  
app.get('/', (req, res) => {
  res.render('home.ejs', {
    restaurant,
  });
});

app.get('/menu', (req, res) => {
    res.render('menu.ejs', {
        restaurant,
    })
})

app.get('/menu/:category', (req, res) => {
    console.log(req.params)
    let category = req.params.category;
    console.log(category)

    const items = restaurant.menu.filter((item) => {
        return item.category === category;
    })
    
    // upper case letter
    let newArray = category.split('');
    let newLetter = newArray[0].toUpperCase();
    newArray.splice(0, 1, newLetter);
    category = newArray.join('');

    
    res.render('category.ejs', {
        category,
        items,
    })

})

app.listen(3000);
