let product={
    Color:["灰色","銀色","金色"],
    Version:{
        Device: ["32GB","128GB"],
        Price:["NT$10,900起","NT$13,900起"]
    },
    Connect:{
        Wifi:["WI-FI","WI-FI+行動網路"],
        Price:["NT$10,900","NT$13,900起"]
    }
}
let color = document.querySelector(".item .h4");
// for(let i =0; i < product.Color.length; i++){
//     color.innerText = product.Color[i];
// }
color.innerText = product.Color[0];

let version = document.querySelector(".version h4");
version.innerText = product.Version.Device[0];
let p = document.querySelector(".version p");
p.innerText = product.Version.Price[0];