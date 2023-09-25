let user = {
    name: "Harry",
    age: 40,
    nationality: "Filipino",
    greet: function () {
        alert(`Hello ${this.name}!`);
    },
    hobbies: ["gaming", "sports", "riding"],
    cartlist: [{
            id: 1,
            img: "../img/product/footrest280.jpg",
            product: "Footrest",
            price: 280
        },
        {
            id: 2,
            img: "../img/product/HengBolts25.jpg",
            product: "Heng Bolts",
            price: 25
        },
        {
            id: 3,
            img: "../img/product/Mioiflatseat9501.jpg",
            product: "Mio i flatseat",
            price: 950
        },
        {
            id: 4,
            img: "../img/product/motooil-1.jpg",
            product: "Moto Oil",
            price: 300
        },
        {
            id: 5,
            img: "../img/product/Mt8racingpipe1500.jpg",
            product: "Mt8 Racing Pipe",
            price: 1500
        },
        {
            id: 6,
            img: "../img/product/RccShock4500.jpg",
            product: "RCC Shock",
            price: 4500
        },
        {
            id: 7,
            img: "../img/product/RcingBrdrBrkLvr470.jpg",
            product: "Racing Brother Brake",
            price: 470
        },
        {
            id: 8,
            img: "../img/product/RidrHengKkStrtr300.jpg",
            product: "Rider Heng Kick Start",
            price: 300
        },        
        {
            id: 9,
            img: "../img/product/Sidemror300-1.jpg",
            product: "Side Mirror",
            price: 300
        },
        {
            id: 10,
            img: "../img/product/SkydrvCalpr499-1.jpg",
            product: "Sky Drive Caliper",
            price: 499
        },
        {
            id: 11,
            img: "../img/product/Spedtunerset700-1.jpg",
            product: "Speed Turner Set",
            price: 700
        },
        {
            id: 12,
            img: "../img/product/sprocket-1.jpg",
            product: "Sprocket",
            price: 450
        },
        {
            id: 13,
            img: "../img/product/SzkiSkydveBelt1000.jpg",
            product: "Suzuki Skydrive Belt",
            price: 1000
        },
        {
            id: 14,
            img: "../img/product/Vs1Org320-1.jpg",
            product: "VS 1 Original",
            price: 320
        },
        {
            id: 14,
            img: "../img/product/Vs1Org320-1.jpg",
            product: "VS 1 Original",
            price: 320
        },
        {
            id: 15,
            img: "../img/product/Rs8GrveBelMio450.jpg",
            product: "RS8 Groove Bel Mio",
            price: 450
        }

    ],
    orderlist: [],
    showproducts() {
        let cart = document.getElementById("cart");
        let cartlist = "";
        this.cartlist.forEach(
            function (iteminthelist) {
                cartlist +=
                `<div class="card d-inline-block" style="width: 18rem; box-shadow: 0px 5px 15px rgba(0,0,0,0.6); padding  0;">
                <img src="${iteminthelist.img}" class="card-img-top" alt="...">
                <div class="card-body">

                  <h5 class="card-title" id="product${iteminthelist.id}">${iteminthelist.product}</h5>

                  <p class="card-text" id="price${iteminthelist.id}">${iteminthelist.price}</p>

                  <a href="#" class="btn btn-primary" onclick="add(${iteminthelist.id})">Add to cart</a>
                </div>
              </div>`;
            })
        cart.innerHTML = cartlist;

    },
    showOrder() {
        let orders = document.getElementById("ordersum");
        let orderList = "";
        let totalCost = 0;
        this.orderlist.forEach(
            function (iteminthelist) {
                orderList +=
                    `<li>${iteminthelist.product} - ${iteminthelist.price}</li>`

                ;
                totalCost += Number(iteminthelist.price);
            })
        orders.innerHTML = orderList;
        document.getElementById("total").innerText = `Total: Php ${totalCost}`;

    }

}


user.showproducts();
user.showOrder();

function add(id) {
    let order = document.getElementById("product" + id).innerHTML;
    let price = document.getElementById("price" + id).innerHTML;

    user.orderlist.push({
        id: id,
        product: order,
        price: price
    });
    user.showOrder();
    console.log(user.orderlist.length)

}




function del() {
    user.orderlist.pop();
    user.showOrder();

}


function totalOrder() {
    let totalCost = 0;
    for (const item of user.orderlist) {
        totalCost += Number(item.price);
    }
    return totalCost;
}
function payment() {
    const totalCost = totalOrder();
    alert(`Payment completed! Total amount of your order is Php ${totalCost}. Thank you for your purchase.`);
}
user.showOrder();
updateTotal();