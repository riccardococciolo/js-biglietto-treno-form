// data
const distance = prompt("Quanti km dovrai percorrere?");

const age = prompt("Quanti anni hai?");
console.log(distance, age)

// logic
const price = (distance * 0.21);
console.log(price);

let finalPrice = "";

if (age < 18) {
    finalPrice = (price - price * 0.20);
} else if (age >= 65) {
    finalPrice = (price - price * 0.40);
} else {
    finalPrice = price;
}

console.log(finalPrice);

const message = `Il suo biglietto costa ${finalPrice.toFixed(2)}£ le auguriamo un buon viaggio.`;
console.log(message);

// output
document.getElementById("price").innerHTML = message;
