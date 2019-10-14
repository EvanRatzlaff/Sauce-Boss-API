class Api {
    static baseUrl = 'http://localhost:3000'

    static grabIngredients() {
        fetch(Api.baseUrl + '/api/ingredients')
        .then(res => res.json())
        .then(ingredients => {
            ingredients.forEach(ingredient => {
            let newIngredient = new Ingredient(ingredient.name, ingredient.recipe_id);
        })
        Ingredient.renderAllIngredients()
        }) 
    }
    static getRecipes(){
        return fetch(Api.baseUrl + '/api/recipes')
        .then(res => res.json())
        .then(recipes => {
            recipes.forEach(recipe => {
                let newRecipe = new Recipe(recipe.title, recipe.ingredients);
            })

        })
        .catch(errors => console.log('d', errors))
    }
    static submitForm(event) {
            event.preventDefault();
            let data = submitInput();
            fetch(Api.baseUrl + '/api/ingredients', {
                method: "POST", 
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
           .then(res => res.json())
           .then(data => {;
               let recipe = new Recipe(data.title, data.ingredients)
              let ingredient = new Ingredient(data.name)
               recipe.display()
              ingredient.display();
           })
       
    }
    

}