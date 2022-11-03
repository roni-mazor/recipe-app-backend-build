const express = require('express')
const { updateRecipe, addRecipe, getRecipes, getRecipeById } = require('./recipe.controller')

const router = express.Router()

router.get('/', getRecipes)
router.get('/:id', getRecipeById)
router.put('/:id', updateRecipe)
router.post('/', addRecipe)

module.exports = router