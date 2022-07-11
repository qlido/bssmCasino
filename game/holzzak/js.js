
function gohome(){
    zmoney();
    window.location.href = "../../index.html";
}
function test(){
    swal("Hello world!");
}
let bet = parseInt(localStorage.getItem("bet"));
let money = parseInt(localStorage.getItem("money"));
if(isNaN(money)){
    money = 1000000;
    localStorage.setItem("money",money);
}
document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;

document .getElementById("betting").innerHTML = `${bet}`

let ranbae = parseInt(localStorage.getItem("ranbae"));
if(ranbae>100){
    document.getElementById("baedang").innerHTML = `${ranbae}%`;
}else {
    zmoney();
    changeRanbae();
}
function changeRanbae(){
    ranbae = Math.round(Math.random() * 300);
    if (ranbae < 100) {
        ranbae += 100;
    }
    localStorage.setItem("ranbae", ranbae);
    document.getElementById("baedang").innerHTML = `${ranbae}%`;
}
function holzzakgame(cho) {
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

    } else {
        let num = Math.round(Math.random() * 100 + 1);
        document.getElementById("num").innerHTML = num;
        if (num % 2 === cho) {

            money = money + Math.round(bet * (ranbae / 100));
            bet = 0;
            localStorage.setItem("bet", 0);
            localStorage.setItem("money", money);
            money = Math.round(parseInt( localStorage.getItem("money")));
            document.getElementById("betting").innerHTML = `${bet}`;
            document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
            console.log("정답");
            console.log(num);
            alert("성공!");
        } else {
            alert("실패!");
            bet = 0;
            localStorage.setItem("bet", 0);
            document.getElementById("betting").innerHTML = `${bet}`;
            document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
            console.log("오답");
            console.log(num);
        }
        changeRanbae();

    }
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


