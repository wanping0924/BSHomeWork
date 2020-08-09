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

let nowtime = new Date();
var nowMonth = nowtime.getMonth();//月 7 => 8月
var nowYear = nowtime.getFullYear();//年 2020
// var day = 1;//日期的變數


//一開始
function initCalander() {
    tbody.innerHTML="";
    console.log(nowMonth);
    let nowDate = nowtime.getDate();//日(號) 5
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
        tbody.appendChild(firstr)
        //第一列
        for (let i = 0; i < 7; i++) {
            let tbodytd = document.createElement("td");
            //取得第一天星期幾 ex:若第一天周三 前面0 1 2位置放入空的td
            if (i >= FirWeek) {//ex:若第一天周三 而週3 4 5 把日期放入td裡面
                tbodytd.innerText = day;
                day++;
            }
            firstr.appendChild(tbodytd);
        }
        //取得有幾個tr(列/幾週) => (總天-第一列天數) /7 無條件進位(Math.ceil) 取得有幾個tr(列)
        let tr_count = Math.ceil((MtotalDay - day + 1) / 7);
        //第二列之後
        //1.先判斷有幾個tr 
        //2.第一列放入天數 一週有7天跑7次迴圈放天數
        for (let i = 0; i < tr_count; i++) {
            let tbodytr = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                let tbodytd = document.createElement("td");
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
    if (nowMonth>=0 && nowMonth < 12)  {
        initCalander();
    }else if(nowMonth == 12){
        //年份
        nowYear = nowYear+1;
        nowMonth=0
        initCalander();
    }
}

//按了prev
function prevYearEvent() {
    nowMonth--;
    //英文
    if (nowMonth>=0 && nowMonth < 12) {
        initCalander();
    }else if(nowMonth == -1){
        //年份
        nowYear = nowYear-1;
        nowMonth=11
        initCalander();
    }
}


