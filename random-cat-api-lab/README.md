# Random Cat API - Lab
                                              
<div style="display: flex; justify-content: space-between; ">
    <img src="https://i.imgur.com/kf0LwZH.jpg" alt="cats" height="300">
    <img src="https://media.git.generalassemb.ly/user/41550/files/6b91afa8-b2d1-4cc2-9ea1-f0af3bd0bf9d" alt="Alt Text" height="300">
    <img src="https://i.imgur.com/kGArJAF.jpg" alt="cats" height="300">
</div>

# Intro

Now that you've worked in APIs, learn how to comb through an API's
documentation! By reading about what an API can do and how to use it, you'll be
able to add amazing features and functionality to your projects and
applications.

## Setup and Instructions

1. Fork and clone this repository.
2. The starter code is available in the `index.html` and `style.css` files. Create an `script.js`, and link it to the `index.html`.
3. Complete the following exercise in the files you created. You can also add more CSS, if you want!

## Exercise and Requirements

### Part 1

First, use `fetch()` to make a GET request to the Cat API and console log the
response object.

- Navigate to the [Cat API Documentation](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t) and read
  through the documentation.
- In `script.js`, use `fetch()` and the "Get a Random Kitty" URL to make a GET
  request and console log the response object.

> How will you know if your request was successful?

### Part 2

Next, use the Cat API to display an image of a random cat every time the user
clicks a button! You will add functionality to the Random Cat button that has
been provided for you.

- Add functionality so that when the Random Cat button is clicked, an image of a
  random cat appears!

### Part 3

Finally, you will add a search feature to the form in the starter code. To
utilize this API's search functionality, you will need to request and use an API
key. The key will go in a fetch object called headers. Check out the
[fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
to learn more about this!

You will need to give your fetch function a second parameter called `headers`,
which will be an object that takes the key:value pair
`'x-api-key': 'INSERT YOUR API KEY HERE'`. It will look something like this:

```
fetch('www.randomURL.com', {
    headers: {
        'x-api-key': 'INSERT YOUR API KEY HERE'
    }
})
```

Adding the API key allows you to utilize all that the Cat API has to offer!

- Go to the [Cat API web site](https://thecatapi.com/) and request an API key by
  clicking SIGN UP FOR FREE. The key will be emailed to you right away.
- In the email, click API DOCUMENTATION and read through it to learn how to use
  the Cat API to its fullest capacity.
- Add functionality so that when a user enters a category's ID number into the
  input field, a random cat from that category appears!

### Bonus

When a user enters the name of the category into the input field, a random cat
from that category appears!
