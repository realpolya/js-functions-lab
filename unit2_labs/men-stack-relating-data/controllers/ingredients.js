import Router from "express";
const router = Router();
import User from "../models/user.js";
import Ingredient from "../models/ingredient.js";
import Recipe from "../models/recipe.js";

// RECIPE ROUTES
// GET all ingredients
router.get('/', async (req, res) => {
    const allIngredients = await Ingredient.find();

    // get recipes of each ingredient
    const allRecipes = await Recipe.find();

    // get username
    const allUsers = await User.find();

    res.render('ingredients/list.ejs', { allIngredients, allRecipes, allUsers });
})

// GET new ingredient page
router.get('/new', async (req, res) => {
    const user = req.session.user;
    console.log(user);
    res.render('ingredients/new.ejs', { user })
})

// POST new ingredient
router.post('/', async (req, res) => {
    await Ingredient.create(req.body);
    const allIngredients = await Ingredient.find();
    // get recipes of each ingredient
    const allRecipes = await Recipe.find();
    // get username
    const allUsers = await User.find();
    res.render('ingredients/list.ejs', { allIngredients, allRecipes, allUsers });
})


export default router;