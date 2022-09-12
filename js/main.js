var elList = document.querySelector(".list");
var elForm = document.querySelector("form");
var elInput = document.querySelector("input[type='text']");
var elCheckbox = document.querySelector("input[type='checkbox']");


var fruits = [
    "Apple",
    "Coconate",
    "Watermelone"
];
 

for(let i = 0; i < fruits.length; i++){
    const newEl = document.createElement("li");
    newEl.textContent = fruits[i];

    elList.append(newEl);
}

elForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();

    const isImportantChecked = elCheckbox.checked;
    const addFruit = elInput.value;

    if(addFruit){
        if(isImportantChecked){
            const newEl = document.createElement("li");
            fruits.unshift(addFruit);
            newEl.textContent = fruits[0];
            elList.prepend(newEl)
        }else{
            const newEl = document.createElement("li");
            fruits.push(addFruit)
            newEl.textContent = fruits[fruits.length - 1];
            elList.append(newEl);
        }
    }
    
    // for(let i = 0; i < fruits.length; i++){
    //     elList.append(fruits[i]);
    // }
    
    // elList.innerHTML = null;
    // for(let i = 0; i < fruits.length; i++){
    //     const newEl = document.createElement("li");
    //     newEl.textContent = fruits[i];
    
    //     elList.append(newEl);
    // }

    elInput.value = "";
});

console.log(fruits)

