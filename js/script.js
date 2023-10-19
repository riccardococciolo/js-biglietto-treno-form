const userDistanceElem = document.getElementById("distance");
const userNameElem = document.getElementById("name");
const userAgeElem = document.getElementById("age");

const sendBtn = document.getElementById("send")
sendBtn.addEventListener("click", function () {
    // data
    const userDistance = userDistanceElem.value;
    const userName = userNameElem.value;
    const userAge = userAgeElem.value;
    console.log(userDistance, userAge, userName);

    const price = (userDistance * 0.21);
    console.log(price);

    let finalPrice = "";

    if (userAge < 18) {
        finalPrice = (price - price * 0.20);
    } else if (userAge >= 65) {
        finalPrice = (price - price * 0.40);
    } else {
        finalPrice = price;
    }

    console.log(finalPrice);

    const message = `Il suo biglietto costa ${finalPrice.toFixed(2)}£ le auguriamo un buon viaggio.`;
    console.log(message);
});
// data
// logic


// output
document.getElementById("price").innerHTML = message;
