class Ingredient {
    static all = []

    constructor(name, recipe){
        this.name = name;
        this.recipe = recipe;
        Ingredient.all.push(this);
        //this.baseUrl = 'http://localhost:3000/api/ingredients'
    }
   
   template() {
       return `
       
       `
   }

   display() {
       document.getElementsByClassName("ingredients-list")[0].innerHTML += this.template();]
   }

   static grabIngredients(){
       Ingredient.all.forEach(blog => blog.display())
   }

    //this method below is servicing our frontend by supplying it with the "json-ed" list of ingredients
    /*grabIngredients() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    } */
}

