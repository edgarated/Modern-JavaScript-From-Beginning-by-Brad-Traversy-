//create  element
const li = document.createElement("li");
//add class
li.className = "collection-item"
//add content
const item = document.createTextNode("Hello");
//append content to li
li.appendChild(item)

// create content for link
const link = document.createElement("a");
//add class
link.className="delete-item secondary-content"
//add second link using innerHTML
link.innerHTML= '<i class="fa fa-remove"></i>'
//append link to li
li.appendChild(link)
//append li to ul
document.querySelector("ul.collection").appendChild(li)

console.log(li)


