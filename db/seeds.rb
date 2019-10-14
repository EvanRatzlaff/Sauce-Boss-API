# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ingredients = Ingredient.create([
    {name: 'red cilantro'},
    {name: 'yumberry juice'},
    {name: 'onion'},
    {name: 'coriander'},
    {name: 'concentrated dark matter'},
    {name: 'toobwallian swamp root'},
    {name: 'ewok oil'},
    {name: 'arrowroot powder'},
    {name: 'Asafoetida salt'},
    {name: 'cardamom'},
    {name: 'purple peppercorn'},
    {name: 'Algerian strappleberry flowers'},
    {name: 'black moon jelly'}
])

Recipe.create(title: "Captain Cosmo's Galactic Garlic Aioli", ingredients: ingredients[0..4])
