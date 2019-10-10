# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ingredient.create([
    {name: 'red cilantro'},
    {name: 'yumberry juice'},
    {name: 'essence of onion'},
    {name: 'coriander'},
    {name: 'okinawa spinach'},
    {name: 'himilayan yak milk'},
    {name: 'concentrated dark matter'},
    {name: 'toobwallian swamp root'},
    {name: 'Ewok oil'},
    {name: 'arrowroot powder'},
    {name: 'Asafoetida salt'},
    {name: 'cardamom'},
    {name: 'cyborg sweat'},
    {name: 'purple peppercorn'},
    {name: 'Algerian strappleberry flowers'},
    {name: 'black moon jelly'}
])

Recipe.create([
    {title: "Crazy Cosmic Ray's Galactic BBQ Sauz", ingredients: 'Ewok Oil, cyborg sweat, love, cumin, garlic, lemon, 1 egg, flour, a dash of purple peppercorn, handful of red cilantro, and one clove of peruvian mango pepper'}
])