const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function query() {
    try {
        const collection = await dbService.getCollection('recipe_db')
        let recipes = await collection.find().toArray()
        return recipes

    } catch (err) {
        throw err
    }

}

async function update(recipe) {
    try {
        var id = ObjectId(recipe._id)
        delete recipe._id
        const collection = await dbService.getCollection('recipe_db')
        await collection.updateOne({ _id: id }, { $set: { ...recipe } })
        return recipe
    } catch (err) {
        throw err
    }
}

async function getById(recipeId) {
    try {
        const collection = await dbService.getCollection('recipe_db')
        const recipe = collection.findOne({ _id: ObjectId(recipeId) })
        return recipe
    } catch (err) {
        throw err
    }
}

async function add(recipe) {
    try {
        const collection = await dbService.getCollection('recipe_db')
        await collection.insertOne(recipe)
        return recipe
    } catch (err) {
        throw err
    }
}

module.exports = {
    query,
    add,
    getById,
    update
}

