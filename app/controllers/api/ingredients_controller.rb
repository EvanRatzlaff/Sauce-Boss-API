class Api::IngredientsController < ApplicationController

    def index 
        @ingredients = Ingredient.all

        render json: @ingredients, status: 200
    end 

    def show 
        find_ingredient

        render json: @ingredient, status: 200
    end

    def create 
        @ingredient = Ingredient.new(ingredient_params)
        @recipes = Recipe.all
        if @ingredient.save
            render json: @ingredient, status: 200
        end
    end

    def update
        find_ingredient
        if @ingredient.update(ingredient_params)
            render json: @ingredient, status: 200
        end
    end

    def destroy 
        find_ingredient
        @ingredient.delete
        render json: {ingredientId: @ingredient.id}

    end



    private
    def find_ingredient
        @ingredient = Ingredient.find(params[:id])
    end

    def ingredient_params 
        params.require(:ingredient).permit(:name, :recipe_id)
    end 
end