const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    const price = parseFloat(document.getElementById("price").value);
    const tip = parseFloat(document.getElementById("tip").value);
    const tax = 0.0625;

    if (!isNaN(price)) {
        const totalTax = price * tax;
        const totalTip = price * tip;
        const totalPrice = price + totalTip + totalTax;

        document.getElementById("tax").innerHTML = "Tax: $" + totalTax.toFixed(2);
        document.getElementById("tipTxt").innerHTML = "Tip: $" + totalTip.toFixed(2);
        document.getElementById("total").innerHTML = "Final Price with Tip: $" + totalPrice.toFixed(2);

    } else {
        window.alert("Please enter a valid price");
    }
});