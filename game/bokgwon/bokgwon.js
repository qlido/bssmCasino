const btn = document.getElementById("lotto-2-button");
let tmp = 1, numbers;
let double_ary = [[],[],[],[],[]];
let list_index = 0;


function whatis_date(){
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = ("0" + (today.getMonth() + 1)).slice(-2);  // 월
    let date = ("0" + today.getDate()).slice(-2);

    let sdd = "2020-05-30";
    let edd = year+"-"+month+"-"+date;

    let ar1 = sdd.split('-');
    let ar2 = edd.split('-');

    let da1 = new Date(ar1[0], ar1[1], ar1[2]);
    let da2 = new Date(ar2[0], ar2[1], ar2[2]);
    let dif = da2 - da1;
    let cDay = 24 * 60 * 60 * 1000;

    let result = parseInt(dif/cDay);
    let round = Math.floor(result / 7) + 914;

    document.getElementById("whatisdate").innerText = "제 "+ round +"회";

    /*raffle-day*/
    let r_add = (Math.floor(result / 7) + 1) * 7;

    let r_addDate = new Date(2020,4,30);
    r_addDate.setDate(r_addDate.getDate()+r_add);

    let r_year = r_addDate.getFullYear(); // 년도
    let r_month = ("0" + (r_addDate.getMonth() + 1)).slice(-2);  // 월
    let r_date = ("0" + r_addDate.getDate()).slice(-2);

    let r_dayday = ['일','월','화','수','목','금','토'];
    let r_day = r_addDate.getDay();
    let r_st = "추 첨 일 : "+year+"/"+month+"/"+date+" ("+r_dayday[r_day]+")";
    document.getElementById("raffle-day").innerText = r_st;

    /*payments-day*/
    let m_addDate = new Date();
    m_addDate.setDate(r_addDate.getDate()+366);


    let m_st = "지급기한 : "+r_year+"/"+r_month+"/"+r_date;
    document.getElementById("payments-day").innerText = m_st;


}


function dead_line_publish(){
    /*publish_day*/
    let p_dayday = ['일','월','화','수','목','금','토'];

    let p_today = new Date();
    let p_year = p_today.getFullYear(); // 년도
    let p_month = ("0" + (p_today.getMonth() + 1)).slice(-2);  // 월
    let p_date = ("0" + p_today.getDate()).slice(-2);
    let p_day = p_today.getDay();


    let p_hours = p_today.getHours(); // 시

    let p_minutes = ("0" + p_today.getMinutes()).slice(-2);  // 분
    let p_seconds = ("0" + p_today.getSeconds()).slice(-2);  // 초

    let p_st = "발 행 일 : "+p_year+"/"+p_month+"/"+p_date+" ("+p_dayday[p_day]+") "+p_hours+":"+p_minutes+":"+p_seconds;

    document.getElementById("publish-day").innerText = p_st;
}

dead_line_publish();
whatis_date();

function getindex(c) {
    let d = 0;
    for (d; c = c.previousElementSibling; d++);
    return d
}


btn.addEventListener("click", function() {
    dead_line_publish();

    tmp === 1 && (
        tmp = 0,
            btn.classList.add("hide"),
            lottery(),
            setTimeout(function() {
                tmp = 1,
                    btn.classList.remove("hide")
            }, 1000)
    )
});

function lottery() {

    let random;
    list_index = 0;

    for(let i=0; i<5; i++){
        numbers = [1,2,3,4,5,6,7,8,9,10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,
            31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45];
        for(let j=0; j<6; j++){
            random = Math.floor(Math.random() *  numbers.length);
            double_ary[i][j] = numbers[random];
            numbers.splice(random, 1)
        }

        var h,t, index;
        var tmp;
        for(h=0; h<5; h++){
            index = h;
            for(t = h+1; t<6; t++){
                if(double_ary[i][index] > double_ary[i][t]) index = t;
            }
            tmp = double_ary[i][h];
            double_ary[i][h] = double_ary[i][index];
            double_ary[i][index] = tmp;
        }
    }


    Array.from(document.querySelectorAll(".ball")).forEach(a => {
        a.classList.remove("done"),
            decryptEffect(a, getindex(a))
    })
}

function decryptEffect(elem, time) {
    elem.classList.add("done")
    elem.innerText = double_ary[list_index][time-2];

    if(time == 7){
        list_index++;
    }



}
function gohome(){
    window.location.href = "../../index.html";
}