//EVENT BUBBLING

// const spark = document.querySelector(".card-title");
// spark.addEventListener("click", function(){
//   console.log("card title");
// })
// const sp = document.querySelector(".card-content");
// sp.addEventListener("click", function(){
//   console.log("card-content");
// })
// const spa = document.querySelector(".col");
// spa.addEventListener("click", function(){
//   console.log("col");
// })
// const spar = document.querySelector(".container");
// spar.addEventListener("click", function(){
//   console.log("container");
// })

//EVENT DELEGATION

// const deleteItem = document.querySelector(".delete-item");
// deleteItem.addEventListener("click", dele);

document.body.addEventListener("click", dele)

function dele(e){
if(e.target.parentElement.classList.contains("delete-item")){
  e.target.parentElement.parentElement.remove();
}

}


