let td = document.createElement("td");


let tbody = document.querySelector("tbody");
console.log(tbody)
let hdyearNum = document.querySelector(".carousel-item .h3")
let hdyear = document.querySelector(".carousel-item .h1")
let next = document.querySelector(".carousel-control-next");
let prev = document.querySelector(".carousel-control-prev");


next.addEventListener('click', nextYearEvent);
prev.addEventListener('click', prevYearEvent);

let mon = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]

let nowtime = new Date();//現在時間
var nowMonth = nowtime.getMonth();//月 7 => 8月
var nowYear = nowtime.getFullYear();//年 2020
// var day = 1;//日期的變數

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
    tbody.innerHTML="";
    console.log(nowMonth);
    let nowDate = nowtime.getDate();//日(號) 5
    // console.log(nowDate)
    let nowDay = nowtime.getDay();//星期 週三
    // console.log(nowtime.getMonth()+1);//7+1=8 => 9月
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
        let modal = document.getElementById("exampleModal")
        tbody.appendChild(firstr)
        //第一列 row
        for (let i = 0; i < 7; i++) {
            let tbodytd = document.createElement("td");
                tbodytd.setAttribute("data-toggle","modal");
                tbodytd.setAttribute("data-target","#exampleModal");
                
            //取得第一天星期幾 ex:若第一天周三 前面0 1 2位置放入空的td
            if (i >= FirWeek) {//ex:若第一天周三 而週3 4 5 把日期放入td裡面
                tbodytd.innerText = day;
                modal.querySelector("h5").innerText = nowYear+'/'+(nowMonth+1)+'/'+day
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
                tbodytd.setAttribute("data-toggle","modal");
                tbodytd.setAttribute("data-target","#exampleModal");
                // tbodytd.setAttribute("")
                if(day == nowDate){//當日標起來
                    // tbodytd.setAttribute("class","border border-primary")
                }
                if (day <= MtotalDay) {
                    tbodytd.innerText = day;
                    day++;
                    
                }
                tbodytr.appendChild(tbodytd);
            }
            tbody.appendChild(tbodytr)
        }
    }
}

initCalander();

//按了next
function nextYearEvent() {
    nowMonth++;
    //英文
    if(nowMonth >11){
        //年份
        nowYear = nowYear+1;
        nowMonth=0
    }
    initCalander();
}

//按了prev
function prevYearEvent() {
    nowMonth--;
    //英文
    if(nowMonth < 0){
        //年份
        nowYear = nowYear-1;
        nowMonth=11
    }
    initCalander();
}


