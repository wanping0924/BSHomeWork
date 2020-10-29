let td = document.createElement("td");
let tbodytd = document.createElement("td");

let tbody = document.querySelector("tbody");
let hdyearNum = document.querySelector(".carousel-item .h3")
let hdyear = document.querySelector(".carousel-item .h1")
let next = document.querySelector(".carousel-control-next");
let prev = document.querySelector(".carousel-control-prev");


let mon = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]

let nowtime = new Date();//現在時間
var nowYear = nowtime.getFullYear();//當年 2020
var nowMonth = nowtime.getMonth();//當月 7 => 8月
let nowDate = nowtime.getDate();//日(號) 5
let nowDay = nowtime.getDay();//星期 週三
next.addEventListener('click', nextYearEvent);
prev.addEventListener('click', prevYearEvent);

/*行事曆
把這個月長出來
1.今天甚麼年幾月幾號
2.當月總天數
3.當月第一天星期幾
4.建立table
4-1.第一列row 天數先排出
4-2.其餘row的天數再排出

1.點td要跳出視窗並取得當日日期
2.用陣列加入資料清單 瞭解資料結構 有人事時地物/google map
2.新增資料要判斷原先有無資料把資料放進Local storage
3.修改 刪除 撈出local storage資料
*/


//一開始
function initCalander() {
    tbody.innerHTML = "";
    var day = 1;//日期的變數
    hdyearNum.innerText = nowYear;
    hdyear.innerText = (mon[nowMonth]);
    monTotalDayFirstWeek(nowYear, nowMonth);
    //當月總天數&當月第一天星期幾
    function monTotalDayFirstWeek(Year, Mon) {
        //當月總天數
        let monTotalDay = new Date(Year, Mon + 1, 0).getDate();
        //當月第一天星期幾
        let mFWeek = new Date(Year, Mon, 1).getDay();
        monDateTable(monTotalDay, mFWeek);
    }

    //建立table
    function monDateTable(MtotalDay, FirWeek) {
        let firstr = document.createElement("tr");
        tbody.appendChild(firstr)
        //第一列 row
        for (let row = 0; row < 7; row++) {
            let tbodytd = document.createElement("td");
            // 填補前面空格 取得第一天星期幾 ex:若第一天周三 前面0 1 2位置放入空的td
            if (row >= FirWeek) {//ex:若第一天周三 而週3 4 5 依序把日期1 2 3放入td裡面
                tbodytd.innerText = day;
                tbodytd.setAttribute("data-toggle", "modal");
                tbodytd.setAttribute("data-target", "#AddModal");
                tbodytd.setAttribute("id", nowYear + '/' + (nowMonth + 1) + '/' + tbodytd.innerText)
                let modeldate = document.querySelector("#AddModal #date");

                tbodytd.addEventListener('click', function () {
                    modeldate.value = nowYear + '/' + (nowMonth + 1) + '/' + tbody.rows[0].cells[6].innerText
                    console.log(tbody.rows[0].cells[6].innerText)
                    //table.rows[1].cells[6].innerText   //tbodytd.innerText
                })
                day++;
            }
            firstr.appendChild(tbodytd);
        }
        //取得有幾個tr(列/幾週) => (總天-第一列天數) /7 無條件進位(Math.ceil) 取得有幾個tr(列)
        let tr_count = Math.ceil((MtotalDay - day + 1) / 7);
        //第二列之後 row
        //1.先判斷有幾個tr 
        //2.第一列放入天數 一週有7天跑7次迴圈放天數
        for (let i = 0; i < tr_count; i++) {
            let tbodytr = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                let tbodytd = document.createElement("td");
                if (day <= MtotalDay) {
                    tbodytd.innerText = day;
                    tbodytd.setAttribute("data-toggle", "modal");
                    tbodytd.setAttribute("data-target", "#AddModal");
                    tbodytd.setAttribute("id", nowYear + '/' + (nowMonth + 1) + '/' + tbodytd.innerText)
                    let modaldate = document.querySelector("#AddModal #date");
                    tbodytd.addEventListener('click', function () {
                        modaldate.value = nowYear + '/' + (nowMonth + 1) + '/' + tbodytd.innerText
                        console.log(tbodytd.innerText)
                    })
                    day++;
                }
                tbodytr.appendChild(tbodytd);
            }
            tbody.appendChild(tbodytr)
        }
    }
    let aa = document.getElementById("calandarTbDate")
    console.log(aa)
    showData()
}


initCalander();
//按了next
function nextYearEvent() {
    nowMonth++;
    //英文
    if (nowMonth > 11) {
        //年份
        nowYear = nowYear + 1;
        nowMonth = 0
    }
    initCalander();
}

//按了prev
function prevYearEvent() {
    nowMonth--;
    //英文
    if (nowMonth < 0) {
        //年份
        nowYear = nowYear - 1;
        nowMonth = 11
    }
    initCalander();
}
//取得新增事項內容
function addItem() {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let content = document.getElementById("content").value;
    if (title != '' && time != '' && content != '') {
        SaveData(title, date, time, content)
    }
    else (
        alert("標題、日期、內容,不可為空白")
    )
    clearModel()
}

//新增事項
var object = []
function SaveData(title, date, time, content) {
    // debugger
    let temp = {
        title: title,
        date: date,
        time: time,
        content: content,
    }
    object.push(temp);
    console.log(object)
    //setItem 增加資料到localStorage
    localStorage.setItem(temp.date, JSON.stringify(object));
    showData()
}

function showData() {
    console.log(localStorage.key(0))
    if (localStorage.key(0) != null) {
        for (var i = 0; i < localStorage.key.length; i++) {
            let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
            console.log(temp)
            let itemP = document.createElement("p");
            let itemDiv = document.createElement("div");
            let date = temp[i].date;
            let td = document.getElementById(date)
            itemP.classList.add("text-primary")
            itemP.textContent = temp[i].title;
            itemDiv.appendChild(itemP)
            td.appendChild(itemDiv)
        }
    }else {
        console.log("11")
    }
}

function clearModel() {
    document.getElementById("title").value = "";
    // document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("content").value = "";
}