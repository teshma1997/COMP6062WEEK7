let numberInput = document.querySelector('#numberInput')
numberInput.addEventListener('input', function() {
   

    if (numberInput.value <= -10 || numberInput.value >= 10) {
        alert('The number should be between -10 and 10');
    }
});

const fruit = {
    name: 'Apple',
    color: 'Red',
    taste: 'Sweet',
};


let fruitName = document.querySelector('#fruitName');
let fruitColor = document.querySelector('#fruitColor');
let fruitTaste = document.querySelector('#fruitTaste');

fruitName.innerHTML = `Name: ${fruit.name} `;
fruitColor.innerHTML = `Color: ${fruit.color}`;
fruitTaste.innerHTML = `taste:${fruit.taste}`;

