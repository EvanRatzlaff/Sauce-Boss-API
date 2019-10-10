class Recipe {
    static all = []

    constructor(title){
        this.title = title;
        Recipe.all.push(this)
    }
    ingredients() {
        Ingredient.all.filter(ing => ing.recipe.title === this.title);
    }

    static find(title) {
        return Recipe.all.find(recipe => recipe.title === title);
    }

    static findOrCreate(title) {
        let recipe = Recipe.find(name);
        if (recipe) {
            return recipe
        } else {
            return new Recipe(title, ingredients)
        }
    }
    /*     this.ingredients = []
        this.recipe = new 
        this.baseUrl = 'http://localhost:3000/api/recipes' 
   
    constructor(title, flavor, ingredients){
        this.title = title;
        this.ingredients = ingredients;
        Recipes.all.push(this)
        this.baseUrl = 'http://localhost:3000/api/recipes'
    } */

    //this method below is servicing our frontend by supplying it with the "json-ed" list of ingredients
    grabRecipes() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}