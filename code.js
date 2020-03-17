var startOrder = () => {
  var startPage = (document.querySelector(".landing-page").style.display =
    "none");
  var form = (document.querySelector(".form-control").style.display = "block");
};
let selectedSize, selectedCrust;
var toppingsPrice, crustPrice, sizePrice, totalPrice;
class Pizza {
  constructor(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }
}

var form = document.getElementById("createorder");
form.addEventListener("submit", createOrder);
var pizzas = [];
function createOrder(e) {
  e.preventDefault();
  var newPizza = new Pizza(
    document.getElementById("size").value,
    document.getElementById("crust").value,
    document.getElementById("toppings").value
  );
  pizzas.push(newPizza);
  if (pizzas[0].size == "large") {
    sizePrice = 1000;
  } else if (pizzas[0].size == "medium") {
    sizePrice = 700;
  } else if (pizzas[0].size == "small") {
    sizePrice = 500;
  }

  if (pizzas[0].crust === "thin") {
    crustPrice = 100;
  } else if (pizzas[0].crust === "thick") {
    crustPrice = 150;
  } else if (pizzas[0].crust === "deep") {
    crustPrice = 200;
  }
  if (pizzas[0].toppings === "pepporoni") {
    toppingsPrice = 100;
  } else if (pizzas[0].toppings === "pinneaples") {
    toppingsPrice = 150;
  } else if (pizzas[0].toppings === "mushrooms") {
    toppingsPrice = 200;
  }
  form.style.display = "none";
  document.getElementById("receit").style.display = "block";
  totalPrice = sizePrice + crustPrice + toppingsPrice;
  document.getElementById("sizeprice").innerHTML = sizePrice;
  document.getElementById("crustprice").innerHTML = crustPrice;
  document.getElementById("toppingprice").innerHTML = toppingsPrice;

  document.getElementById("totalPrice").innerHTML = totalPrice;
  console.log(sizePrice + crustPrice + toppingsPrice);
}
