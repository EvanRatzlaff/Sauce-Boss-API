class Ingredient {
    static all = []
    constructor(name, recipe_id, id){
        this.id = id
        this.name = name
        this.recipe_id = recipe_id
        Ingredient.all.push(this);
    }
    template() {
        return `
        <li>${this.recipe_id}</li>
             <p>${this.name}</p> `
    }

    display() {
        document.getElementsByClassName("recipe-list")[0].innerHTML += this.template()
    }

   static renderAllIngredients(){
       Ingredient.all.forEach(ing => ing.display())
   }
   static findOrCreate(name, recipe_id) {
    let recipe = Recipe.find(title, ingredients)
    if (recipe) {
        return recipe
    } else {
        return new Recipe(title, ingredients)
    }
}

//   static postIngredient(ingredientObj){
//       let ingredient = {
//           'name': ingredientObj.name.value,
//           'recipe_id': ingredientObj.querySelector('#title').value    
//       }
//     let configObj = {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({ ingredient  })
//     }
//     return fetch(RecipeApi.recipes, configObj)
//          .then(res => res.json())
//          .then((ingredientObj) => {
//              let newIngObj = new Ingredient(ingredientObj.name, ingredientObj.id)
//              newIngObj.render()
//             })
//         }


}

