import Router from "express";
const router = Router();
import User from "../models/user.js";
import Recipe from "../models/recipe.js";

// RECIPE ROUTES
// GET all recipes
router.get('/', async (req, res) => {
    res.render('recipes/list.ejs')
})

// GET new recipe page
router.get('/new', async (req, res) => {

    res.render('recipes/new.ejs')
})

// POST new recipe

// GET individual recipe page

// GET edit page for recipe

// PUT page for recipe

// DELETE page for recipe



export default router;
