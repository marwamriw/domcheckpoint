// change color red to icon heart 
$(".heart.fa").click(function() {           $(this).toggleClass("fa-heart fa-heart-o");         });

// selection HTML element 
const container = document.getElementById("container");
const products = container.getElementsByClassName("product");
const totalPrice = document.getElementById("total-cost");
let total = 0;
for (let i=0 ; i < products.length ; i++){
    const product = products[i];
    // selection HTML element + and - 
    const minus = product.getElementsByClassName("minus")[0];
    const plus = product.getElementsByClassName("plus")[0];
    const quantity = product.getElementsByTagName("input")[0];
    const remove = product.getElementsByClassName("remove")[0];
    const price = parseInt(
        product.getElementsByClassName("totalPrice")[0].innerText.substring(1));

        // adding event to + and - button 

        minus.addEventListener("click", () => {
            if (quantity.value > 1) {
                quantity.value--;
                total -= price;
                totalPrice.innerText = `Total Price: $${total}`;
            }
        });
            plus.addEventListener("click", () => {
            quantity.value++;
            total += price;
            totalPrice.innerText = `Total Price: $${total}`;
        });
        
        // adding event to button remove
            remove.addEventListener("click", () => {
            product.remove();
            total -= price * quantity.value;
            totalPrice.innerText= `Total Price: $${total}`;
        });
          total += price * quantity.value ;
            totalPrice.innerText=`Total Price: $${total}`;


}