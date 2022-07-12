function gohome(){
    zmoney();
    window.location.href = "../../index.html";
}
let sl = [0,1,2]
let bet = parseInt(localStorage.getItem("bet"));
let money = parseInt(localStorage.getItem("money"));
if(isNaN(money)){
    money = 1000000;
    localStorage.setItem("money",money);
}
document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;

document .getElementById("betting").innerHTML = `${bet}`

let ranbae = parseInt(localStorage.getItem("ranbae1"));
if(ranbae>10000){
    document.getElementById("baedang").innerHTML = `${ranbae}%`;
}else {
    zmoney();
    changeRanbae();
}
function changeRanbae(){
    ranbae = Math.round(Math.random() * 10999+ 1);
    if (ranbae < 1000) {
        ranbae += 10000;
    }
    localStorage.setItem("ranbae1", ranbae);
    document.getElementById("baedang").innerHTML = `${ranbae}%`;
}

//런치리스트 배열생성
let lunchList = ["ě","🤣",3,4,"🤩",6,7,8,9,"😋","👍","❤"]

//배열복사
let firstLunchList = [];

lunchList.forEach(function(item) {
    firstLunchList.push(item);
});

let distanceList = ["10m", "8m", "7m", "7m", "9m"];
let costList = ["7000won", "5000won", "4500won", "8000won", "9000won"];


//제어할 요소선택 후 변수에 담기
let displaySlot = document.querySelector(".menu_slot"); //menu slot
let elem = document.querySelectorAll(".menu_print > h2"); //menu print



//reset check
let resetNum = 1;

//LunchIs 함수선언
function lunchIs() {
    if (bet == null || bet === 0 || isNaN(bet) || typeof bet == 'string') {
        Swal.fire({
            title: '베팅하세요!',
            text: "배팅을 하셔야 게임을 진행 하실수 있습니다",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '베팅할게요!',
            cancelButtonText: '안해!'
        }).then((result) => {
            if (result.isConfirmed) {
                popup();
            }
        })
    }else {//setTimeout 선언
            setTimeout(timeFunc(0), 900);
            setTimeout(timeFunc(1), 1500);
            setTimeout(timeFunc(2), 1800);


            function timeFunc(set) {
                //shuffle 메소드 선언
                function shuffle(a) {
                    for (let i = a.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [a[i], a[j]] = [a[j], a[i]];
                    }
                    return a;
                }

                //슬롯애니메이션 감추기
                displaySlot.style.display = "none";

                //shuffle 메소드를 사용하여 석은 배열에서 index[0]을 가져오기
                console.log(shuffle(lunchList));
                let lunckPick = shuffle(lunchList)[0];

                //메뉴 노출
                console.log(lunckPick);
                elem[set].innerHTML = lunckPick;

                sl[set] = lunchList.indexOf(lunckPick);
                if(sl[0] === sl[1] === sl[2]) {
                    money = money + Math.round(bet * (ranbae / 100));
                    bet = 0;
                    localStorage.setItem("bet", 0);
                    localStorage.setItem("money", money);
                    money = Math.round(parseInt( localStorage.getItem("money")));
                    document.getElementById("betting").innerHTML = `${bet}`;
                    document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
                    console.log("정답");
                    Swal.fire({
                        title: '슬롯이 당첨되었습니다!',
                        text: `${lunchList[sl[0]]} ${lunchList[sl[1]]} ${lunchList[sl[2]]}`,
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: '다시하기',
                        cancelButtonText: '나가기'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            reset();
                        } else {
                            gohome();
                        }
                    })
                }else {
                    bet = 0;
                    localStorage.setItem("bet", 0);
                    document.getElementById("betting").innerHTML = `${bet}`;
                    document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
                    console.log("오답");
                    Swal.fire({
                        title: '슬롯이 당첨되지 않았습니다!',
                        text: `${lunchList[sl[0]]} ${lunchList[sl[1]]} ${lunchList[sl[2]]}`,
                        icon: 'error',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: '다시하기',
                        cancelButtonText: '나가기'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            reset();
                        } else {
                            gohome();
                        }
                    })
                }
                //reset 되었을 경우에 숨겨진 메뉴를 다시 노출시킴
                if (resetNum == 0) {
                    elem.style.display = "block";

                }
            }
        }
    }

//reset 함수선언
function reset() {
    //메뉴 숨기기
    for(i in elem) {
        elem[i].style.display = "none";
    }
    //슬롯애니메이션 노출
    displaySlot.style.display = "block";

    //distance, cost 초기화

    //resetNum으로 reset여부를 구분하기 위해 0 할당
    resetNum = 0;
}
function popup(){
    zmoney();
    window.open("../betting.html", "베팅하기", "width = 300, height = 500, top = 100, left = 200, status = no, resizable = no, scrollbars = no, toolbars=no");
}
function zmoney(){
    if (money == 0) {
        money = 1000000;
        localStorage.setItem("money", money);
        document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
    }
}