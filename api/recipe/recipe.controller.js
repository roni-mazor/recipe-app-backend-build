const recipeService = require('./recipe.service')

async function getRecipes(req, res) {
    try {
        const recipes = await recipeService.query()
        res.send(recipes)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get recipes' })
    }
}

async function getRecipeById(req, res) {
    try {
        const recipeId = req.params.id
        const recipe = await recipeService.getById(recipeId)
        res.json(recipe)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get recipe' })
    }
}

async function addRecipe(req, res) {
    try {
        const recipe = req.body
        const addedRecipe = await recipeService.add(recipe)
        res.json(addedRecipe)
    } catch (err) {
        res.status(500).send({ err: 'Failed to add recipe' })
    }
}

async function updateRecipe(req, res) {
    try {
        const recipe = req.body;
        const updatedRecipe = await recipeService.update(recipe)
        res.json(updatedRecipe)
    } catch (err) {
        res.status(500).send({ err: 'Failed to update recipe' })

    }
}

module.exports = {
    updateRecipe,
    addRecipe,
    getRecipes,
    getRecipeById
}
