var Product = {
    Ipad:{
        Img:"pic/ipad01.jpg",
        Color:{
            GrayImg:"Pic/ipad02.png",
            SilverImg:"Pic/ipad03.png",        
            GoldImg:"Pic/ipad04.png",        
        },
        Storage:[
            {Memory:"32GB",Price:"NT$10,900起"},
            {Memory:"128GB",Price:"NT$13,900起"},
        ],
        Connection:[
            {Wifi:"Wi-Fi",Price:"NT$10,900起",ThirytwoP:"NT$10,900",OneTwentyEight:"NT$15,400"},
            {Wifi:"Wi-Fi+行動網路",Price:"NT$15,400起",ThirytwoP:"NT$13,900",OneTwentyEight:"NT$18,400"},
        ]
    },
    Iphone:{
        Img:"Pic/iphone11_01.jpg",
        Color:[
            {ColorImg:""},
            {ColorImg:""},
            {ColorImg:""},         
            {ColorImg:""},         
            {ColorImg:""},         
            {ColorImg:"(PRODUCT)RED"},         
        ],
        Storage:[
            {Memory:"64GB",Price:"NT$24,900"},
            {Memory:"128GB",Price:"NT$26,900"},
            {Memory:"256GB",Price:"NT$30,400"},
        ],
    }
};


//先找到要加入的位置
// var body = document.getElementsByTagName("body")[0];

//加入 ipad storage
let storage = document.querySelectorAll(".storage");
let storage_h2 = document.querySelectorAll(".storage h2");
let storage_p = document.querySelectorAll(".storage p");
for(let i=0; i < storage.length; i++){
    storage_h2[i].innerText = Product.Ipad.Storage[i].Memory;
    storage_p[i].innerText = Product.Ipad.Storage[i].Price;
}

//加入wifi項目
let connection = document.querySelectorAll(".connection");
let connection_h2 = document.querySelectorAll(".connection h2");
let connection_p = document.querySelectorAll(".connection p");
for(let i=0; i< connection.length; i++){
    connection_h2[i].innerText = Product.Ipad.Connection[i].Wifi;
    connection_p[i].innerText = Product.Ipad.Connection[i].Price;
}



//by ID
var $getbyId = function(idName){
    return document.getElementById(idName);
}

let  prod_choice_div = $getbyId("product-choice")
let product_img = document.querySelector("#product-img img");
// let color_div = document.querySelectorAll(".color");


//建立新的元素
var $createEle = function(element){
    return document.createElement(element);
}

let btn_ipad = $createEle("button");
let btn_iphone = $createEle("button");
// let ipadImgPath = $createEle("img");


//在新的元素再塞值 
btn_ipad.innerText = "Ipad";
btn_iphone.innerText = "Iphone";
// console.log(btn_iphone);



//圖片路徑
product_img.src = Product.Ipad.Img;


//新元素再加到位置裡
prod_choice_div.appendChild(btn_ipad);
prod_choice_div.appendChild(btn_iphone);


//加入class樣式
prod_choice_div.classList.add("text","text-center");
btn_ipad.classList.add("margin","mr-3");
btn_ipad.classList.add("btn","btn-dark");
btn_iphone.classList.add("btn","btn-dark");


//點選顏色換圖片
let grayImg = $getbyId("grayImg");
let silverImg = $getbyId("silverImg");
let goldImg = $getbyId("goldImg");

grayImg.addEventListener('click',function(){
    product_img.src = Product.Ipad.Color.GrayImg;
});
silverImg.addEventListener('click',function(){
    product_img.src = Product.Ipad.Color.SilverImg;
});
goldImg.addEventListener('click',function(){
    product_img.src = Product.Ipad.Color.GoldImg;
});
btn_ipad.addEventListener('click',function(){
    product_img.src = Product.Ipad.Img;
});

//預設價格
let calcPrice_h2 = document.querySelector(".calcPrice h2");
calcPrice_h2.innerText = "NT$10,900 起";


let wifi_p = document.querySelector(".wifi p");
let wifiMobile_p = document.querySelector(".wifiMobile p");
//點選儲存裝置連動checkbox
let thirty_two_div = document.querySelector(".thirtyTwoGB");
thirty_two_div.addEventListener('click',function(){
    let check =  document.getElementById("twentyTwoCheck");
    // if(check.checked){//若checkbox有勾選
        // check.checked = false;//就取消
        // check.checked = true;//就打勾
        wifi_p.innerText = Product.Ipad.Connection[0].ThirytwoP;
        wifiMobile_p.innerText = Product.Ipad.Connection[0].OneTwentyEight;
    // }
});
let oneTwenty_eight_div = document.querySelector(".oneTwentyEightGB");
oneTwenty_eight_div.addEventListener('click',function(){
    let check =  document.getElementById("oneTwentyEightCheck");
    if(check.checked){//若checkbox有勾選
        check.checked = false;//就取消
    }else{//沒勾選
        check.checked = true;//就打勾
        wifi_p.innerText = Product.Ipad.Connection[1].ThirytwoP;
        wifiMobile_p.innerText = Product.Ipad.Connection[1].OneTwentyEight;
    }
});

//點選連線能力
let wifi_div = document.querySelector(".wifi");
wifi_div.addEventListener('click',function(){
    let check =  document.getElementById("wifiCheck");
    if(check.checked){//若checkbox有勾選
        check.checked = false;//就取消
    }else{//沒勾選
        check.checked = true;//就打勾
        //價格試算
        let price = wifi_p.textContent;
        calcPrice_h2.innerText = price;
    }
});
let wifiMobile_div = document.querySelector(".wifiMobile");
wifiMobile_div.addEventListener('click',function(){
    let check =  document.getElementById("wifiMobileCheck");
    if(check.checked){//若checkbox有勾選
        check.checked = false;//就取消
    }else{//沒勾選
        check.checked = true;//就打勾
        //價格試算
        let price = wifiMobile_p.textContent;
        calcPrice_h2.innerText = price;
    }
});



