//取得input 位置
let calcProcess = document.querySelector(".calc-process");//上面
let total = document.querySelector(".total");//下面

let numValue ="";
//數字寫在同一個function
function insertNum(number){
    numValue += number.value;
    total.value = numValue;
}

//+ - * / 運算子寫在同一個function
function AddCounter(operator){
    numValue += operator.value;
    calcProcess.value += numValue;//按了運算符號後要儲存到上面input
    // console.log(calcProcess.value)
    total.value="";
    numValue="";
}
let totalSum = 0;
//按下=
function TotalResult(){
    let equalValue = document.querySelector(".equal-sign").value;
    let sum = calcProcess.value+total.value ;//+equalValue
    // calcProcess.value = sum
    console.log(typeof(sum))
    let result = eval(sum);//計算
    console.log( result)
    total.value = result;
    calcProcess.value = sum+equalValue;
}

//按0
// function insertZero(Zero){
//     let zero = Zero.value;
//     console.log(zero)
// }

//按dot
function insertDot(Dot){
    let dot = Dot.value;
    //沒輸入數字先按. 前面+0
    if(total.value == ""){
        total.value = dot
        numValue+=(0+dot)//"0."
    }else{
        numValue +=dot
        total.value = numValue;
    }
}
//AC 清除輸入框
function clearAll(){
    calcProcess.value = "";
    total.value = "";
    numValue="";
}