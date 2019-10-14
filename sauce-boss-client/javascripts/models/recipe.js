class Recipe {
    constructor(title, ingredients) {
        this.title = title
        this.ingredients = ingredients
        Recipe.all.push(this)
    }

    ingredients(){
        Ingredient.all.filter(ing => ing.recipe.title === this.title)
        Ingredient.all.filter(ing => ing.recipe.ingredients === this.ingredients)
    }
    

    static find(title) {
        return Recipe.all.find(recipe => recipe.title === title)
    }

    static findOrCreate(title, ingredients) {
        let recipe = Recipe.find(title, ingredients)
        if (recipe) {
            return recipe
        } else {
            return new Recipe(title, ingredients)
        }
    }
}