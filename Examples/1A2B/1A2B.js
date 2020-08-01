var answer = [];
var answerstr = "";
let inpstr = "";
let inpAry = [];
let record_li = "";
const starBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const guessBtn = document.getElementById("guessBtn");
const userInput = document.getElementById("userInput");
const gameRecord = document.querySelector(".list-group");
const input_num = document.getElementById("input_num");

initial();
function initial() {
    resetBtn.disabled = true;
    showAnswerBtn.disabled = true;
    userInput.disabled = true;
    starBtn.disabled = false;
}

//開始遊戲
starBtn.addEventListener('click', function () {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    resetBtn.disabled = false;
    showAnswerBtn.disabled = false;
    userInput.disabled = false;
    starBtn.disabled = true;
    //產生四個不重覆亂數
    for (let i = 0; i < 4; i++) {
        let ans = Math.floor(Math.random() * numArray.length);
        // 轉字串為了跟輸入的字串做比較
        answer.push(numArray[ans].toString());
        numArray.splice(ans, 1);
    }
});

function aryToStr() {
    answerstr = answer.join('');//空字串將陣列連接
}
//按猜Btn
guessBtn.addEventListener('click', function () {
    let A_count = 0;
    let B_count = 0;
    //取得輸入的字串 拆成字元組成陣列 做比對
    inpAry = userInput.value.split('');
    inpstr = userInput.value;
    // let inpSize = noReapeat();
    if(isNanNum()){
        alert("請輸入數字");
        clearInput();
        return;
    }else if (inpAry.length < 4) {
        alert("未輸入四位數");
        clearInput();
        return;
    }else if(inpAry.length > 4){
        alert("請勿輸入超過四位數字")
        clearInput();
        return;
    } 
    else if (noReapeat()) {//表示重複 //inpSize == true
        alert("請勿輸入重複數字");
        clearInput();
        return;
    } else {
        for (let i = 0; i < answer.length; i++) {
            for (let j = 0; j < inpAry.length; j++) {
                //數字對位置對
                if (answer[i] == inpAry[j] && i == j) {
                    A_count++;
                }
                //數字對
                else if (answer[i] == inpAry[j]) {
                    B_count++;
                }
            }
        }
        clearInput();
    }
    setRecord(A_count, B_count, inpstr)
})

//清空輸入框
function clearInput() {
    userInput.value = "";
}
//判斷輸入數字有無重複
function noReapeat() {//Set 物件可讓你儲存任何類型的唯一值 //size存取器屬性返回一個（唯一的）元件的"數量"Set的對象。
    // let inpsize = new Set(inpAry).size;
    // if (inpsize != answer.length) {//表示重複
    //     return true
    // }
    return new Set(inpAry).size != answer.length;//若數量不等於4 表示有重複
}
//判斷是否輸入數字
function isNanNum(){
    console.log(isNaN(inpstr));
    if(isNaN(inpstr)){//不等於數字
        return true
    }
}
//遊戲紀錄
function setRecord(A, B, inputstr) {
    if (A != 4) {
        record_li += `<li class="list-group-item border  mb-3"> <span>${inputstr} : </span>
    <span class="badge badge-danger">${A}A${B}B</span></li>`;
    } else {//4A
        record_li += `<li class="list-group-item border  mb-3"> <span>${inputstr} : </span>
        <span class="badge badge-success">${A}A${B}B</span></li>`;
        alert("恭喜答對了~~");
    }
    gameRecord.innerHTML = record_li;
}

//重新遊戲
resetBtn.addEventListener('click', function () {
    aryToStr();
    alert(`答案是${answerstr}`);
    answer = [];
    record_li = "";
    gameRecord.innerHTML = record_li;
    initial();
})

//查看答案
showAnswerBtn.addEventListener('click', function () {
    aryToStr();
    // input_num.value = answerstr
    alert(`答案是${answerstr}`);
});

