

var recipes = document.querySelectorAll('.nav-link ')
for(var i=0;i<recipes.length;i++){
    recipes[i].addEventListener('click',function(e){
var tar = e.target.innerHTML
getRecipes(tar)
    })
}


var data =[]

 async function getRecipes(recipes){
  var getapi=  await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipes}`)
 var getapi = await getapi.json()
 data=getapi.recipes
 display()
}

getRecipes('pizza')
function display(){
   var cartona='';
   for(var i=0;i<data.length;i++){
    cartona+=` <div class="col-md-4">
    <img class=' w-100' src="${data[i].image_url}" alt="">
    <h2>${data[i].title}</h2>
    <h3>${data[i].social_rank}</h3>
</div>`
   }

document.getElementById('ahmed').innerHTML= cartona
}



