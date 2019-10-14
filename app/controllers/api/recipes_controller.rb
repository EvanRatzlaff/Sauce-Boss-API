class Api::RecipesController < ApplicationController
    def index 
        @recipes = Recipe.all

        render json: @recipes, include: [:ingredients], status: 200
    end 

    def show 
        find_recipe

        render json: @recipe, status: :ok
    end

    def create 
        @recipe = Recipe.new(recipe_params)
        @ingredients = Ingredient.all
        if @recipe.save
            render json: @recipe, status: 201
        else
            render json: {errors: @recipe.errors.full_messages}
        end
    end

    def update
        if @recipe.update(recipe_params)
            render json: @recipe, status: 200
        else
            render json: {errors: @recipe.errors.full_messages}
        end
    end

    def destroy 
        find_recipe
        @recipe.delete
        render json: {recipeId: @recipe.id, notice: "Great, now it's gone forever."}
    end



    private
    def find_recipe
        @recipe = recipe.find(params[:id])
    end

    def recipe_params 
        params.require(:recipe).permit(:title, :ingredients, :ingredient_id)
    end 
end
