//creating the constants
const incrementBtn = document.querySelector("#increment")
const decrementBtnn = document.querySelector("#decrement")
const counterEl = document.querySelector("#counter")
const ulElement = document.querySelector("#list-items")
let counter = 0
//making the increment functions
// thsi increment function is made using arrow function
// this function cannot be called before declaration
const incrementcounter = () =>{
    //increasing the value of the counter
    counter++
    counterEl.innerText = counter
    // create the element
    const li= document.createElement('li')
    //creating the attribute for the list items in html
    li.setAttribute('data-counter',counter)
    //interacting with css in js
    if(counter%2===0){
        li.style.background="red"
        li.style.padding="10px"

    }else{
         li.style.background="yellow"
         li.style.padding="20px"
    }
    // creating the text inside the list items
    const textNode = document.createTextNode("statement"+counter)
    //appending in the element
    li.appendChild(textNode)
    ulElement.appendChild(li)
}
//making the decrement function
function decrementcounter(){
    //catching the attribute of the li element
    const li = ulElement.querySelector('[data-counter="'+counter+'"]')
    //removing the node
    // for removing the odd values
    // const number = parseInt(li.getAttribute('data-counter'),10)
    // if(number%2===0){
    //     li.remove()
    // }
    li.remove()
    //decreasing the value of the counter
    counter--
    counterEl.innerText = counter

}
 //calling the function of increment and decrement 
incrementBtn.addEventListener('click',incrementcounter)
decrementBtnn.addEventListener('click',decrementcounter)
const hello = document.querySelector("#hello");

hello.addEventListener('click',()=>{
alert("hello world");
} )
