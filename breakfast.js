let fried_egg = document.querySelector('.fried-egg')
let fried_egg_recipe=document.querySelector('.fried-egg-recipe')
fried_egg.addEventListener('click', function(){
    fried_egg.style.display='none'
    fried_egg_recipe.style.display="block"
})

fried_egg_recipe.addEventListener('click', function(){
    fried_egg.style.display='flex'
    fried_egg_recipe.style.display="none"
})

let pancake = document.querySelector('.pancake')
let pancake_recipe=document.querySelector('.pancake_recipe')
pancake.addEventListener('click', function(){
    pancake.style.display='none'
    pancake_recipe.style.display="block"
})

pancake_recipe.addEventListener('click', function(){
    pancake.style.display='flex'
    pancake_recipe.style.display='none'
})

let omelette = document.querySelector('.omelette')
let omelette_recipe=document.querySelector('.omelette_recipe')
omelette.addEventListener('click', function(){
    omelette.style.display='none'
    omelette_recipe.style.display="block"
})

omelette_recipe.addEventListener('click', function(){
    omelette.style.display='flex'
    omelette_recipe.style.display='none'
})

let oatmeal = document.querySelector('.oatmeal')
let oatmeal_recipe=document.querySelector('.oatmeal_recipe')
oatmeal.addEventListener('click', function(){
    oatmeal.style.display='none'
    oatmeal_recipe.style.display="block"
})

oatmeal_recipe.addEventListener('click', function(){
    oatmeal.style.display='flex'
    oatmeal_recipe.style.display='none'
})

let sandwiches = document.querySelector('.sandwiches')
let sandwiches_recipe=document.querySelector('.sandwiches_recipe')
sandwiches.addEventListener('click', function(){
    sandwiches.style.display='none'
    sandwiches_recipe.style.display="block"
})

sandwiches_recipe.addEventListener('click', function(){
    sandwiches.style.display='flex'
    sandwiches_recipe.style.display='none'
})

let espresso = document.querySelector('.espresso')
let espresso_recipe = document.querySelector('.espresso_recipe')
espresso.addEventListener('click', function(){
    espresso.style.display='none'
    espresso_recipe.style.display="block"
})

espresso_recipe.addEventListener('click', function(){
    espresso.style.display='flex'
    espresso_recipe.style.display='none'
})