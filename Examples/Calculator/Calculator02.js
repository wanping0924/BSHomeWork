//取得input 位置
let calcProcess = document.querySelector(".calc-process");//上面
let total = document.querySelector(".total");//下面

let numValue = "";
let result = "";
let op = true;//預設運算子狀態 運算子狀態true才可加入運算子 為了不重覆輸入運算子
let dotDefault = true;
let totalSum = 0;

//數字寫在同一個function
function insertNum(number) {
    numValue += number.value;
    total.value = numValue;
    op = true;//有了數字後true才可以加入運算子
    if (calcProcess.value.indexOf("=") == -1) {

    } else {
        calcProcess.value = "";
    }
}

//+ - * / 運算子寫在同一個function
function AddCounter(operator) {
    //未找到= 回傳-1 運算子狀態true才可加入運算子
    if (numValue != "" && calcProcess.value.indexOf("=") == -1 && op == true) {
        numValue += operator.value;
        calcProcess.value += numValue;//按了運算符號後要儲存到上面input
        total.value = "";
        numValue = "";
        op = false;//狀態false 則不可以再加入 為了不重覆輸入運算子
    } else if (numValue != "" && op == true) {//(判斷若按下=結算後，要再做運算)
        numValue += operator.value;
        calcProcess.value = "";
        total.value = (numValue);
        op = false;
    } else {//為了不重覆輸入運算子
        alert("請輸入數字")
        return;
    }

}

//按下=
function TotalResult() {
    if (numValue != "") {
        let equalValue = document.querySelector(".equal-sign").value;
        let sum = calcProcess.value + numValue;//+equalValue
        // calcProcess.value = sum
        console.log(typeof (sum))
        result = eval(sum);//eval()計算
        console.log(result)
        total.value = result;
        calcProcess.value = sum + equalValue;
        numValue = "";
        numValue = result;
        op = true;
    } else {
        alert("請輸入數字")
        return;
    }

}

//按0
// function insertZero(Zero){
//     let zero = Zero.value;
//     console.log(zero)
// }

//按dot
function insertDot(Dot) {
    let dot = Dot.value;
    //沒輸入數字先按. 前面+0
    if (dotDefault == true) {
        if (total.value == "") {
            numValue += (0 + dot)//"0."
            total.value = numValue
        } else {
            numValue += dot
            total.value = numValue;
        }
    }else{
        return
    }
    dotDefault = false
}
//清除輸入框
function clearAll(element) {
    console.log(element)
    //C
    if (element.value == "all-clear") {
        calcProcess.value = "";
        total.value = "";
        numValue = "";
    } else {//AC
        total.value = "";
        numValue = "";
    }
    dotDefault = true
}
//back鍵
function back(){
    let numAry = total.value.split('');
    numAry.splice(-1,1);
    let backNum = numAry.join('');//字串陣列連接
    total.value ="";
    numValue="";
    numValue+=backNum
    total.value+=backNum;

}