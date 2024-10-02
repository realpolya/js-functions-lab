import Router from "express";
const router = Router();
import User from "../models/user.js";
import Recipe from "../models/recipe.js";
import Ingredient from "../models/ingredient.js";

// RECIPE ROUTES
// GET all recipes
router.get('/', async (req, res) => {
    const allRecipes = await Recipe.find();
    const allIngredients = await Ingredient.find();
    console.log(allIngredients[0]._id);
    console.log(allRecipes[3]);
    res.render('recipes/list.ejs', { allRecipes, allIngredients })
})

// GET new recipe page
router.get('/new', async (req, res) => {
    const user = req.session.user;
    console.log(user);

    // load ingredients
    const allIngredients = await Ingredient.find();
    res.render('recipes/new.ejs', { user, allIngredients })
})

// POST new recipe
router.post('/', async (req, res) => {
    const user = req.session.user;
    req.body.owner = user._id;
    console.log(req.body);
    req.body.ingredients = req.body["ingredients[]"];

    // if a key has a value on, push it into ingredients array
    // Object.keys(req.body).forEach((key) => {
    //     // if not in recipe keys
    //     if (key !== "name" && key !== "instructions" && key !== "owner") {
    //         req.body.ingredients.push(key);
    //     }
    // })
    
    await Recipe.create(req.body);
    const allRecipes = await Recipe.find();

    // ingredients are needed to be displayed in the recipe table
    const allIngredients = await Ingredient.find()

    res.render('recipes/list.ejs', { allRecipes, allIngredients })
})

// GET individual recipe page

// GET edit page for recipe

// PUT page for recipe

// DELETE page for recipe



export default router;
