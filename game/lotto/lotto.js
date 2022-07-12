let tmp = 1;
let numbers;
let inputqu = document.querySelectorAll(".inputnum");
let inputlist = [];
let ranlist = [];
let locheck = 0;
let speheck = 0;
let money = parseInt(localStorage.getItem("money"));
if(isNaN(money)){
    money = 1000000;
    localStorage.setItem("money",money);
}
document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
function decryptEffect(element, time) {
    const effect = setInterval(() => {
        element.innerText = Math.floor(Math.random() * 44 + 1);
    }, 10);

    setTimeout(() => {
        const random = Math.floor(Math.random() * numbers.length);

        clearInterval(effect);
        element.classList.add("done");
        element.innerText = numbers[random]
        ranlist.push(numbers[random]);
        numbers.splice(random, 1);
    }, time * 1000 + 1000);
}

function lottery() {
    for(let i =0 ; i < inputqu.length ; i++){
        inputlist.push(parseInt(inputqu[i].value));
        if(inputlist[i] > 45 || inputlist[i] < 1|| isNaN(inputlist[i])){
            Swal.fire({
                title: '슬롯이 당첨되지 않았습니다!',
                text: `0~45사이 숫자만을 입력해 주십시오`,
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '다시하기',
                cancelButtonText: '나가기'
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                } else {
                    gohome();
                }
            })
        }

}
    document.querySelectorAll("#numbers .ball").forEach((element, index) => {
        element.classList.remove("done");
        decryptEffect(element, index);
    });
}

document.getElementById("btn").addEventListener("click", function () {
    money -= 1000;
    localStorage.setItem("money", money);
    ranlist = [];
    if (tmp === 1) {
        numbers = Array.from({ length: 45 }, (_, i) => i + 1);
        tmp = 0;
        btn.classList.add("hide");
        lottery();
        setTimeout(lottocheck, 9000);
        setTimeout(function () {
            (tmp = 1), btn.classList.remove("hide");
        }, 7500);
    }
});

function lottocheck(){
    locheck = 0;
    for(let i = 0 ; i < inputlist.length ; i++){
        if(ranlist.includes(inputlist[i])) {
            if (ranlist[6] === inputlist[i]) {
                locheck++;
                speheck++;
                delete ranlist[ranlist.indexOf(inputlist[i])];
            } else {
                locheck++;
                delete ranlist[ranlist.indexOf(inputlist[i])];
            }
        }
    }
    if(locheck < 3){
        Swal.fire({
            title: '실패!',
            text: `${locheck}개 맞았습니다`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '다시할게요!',
            cancelButtonText: '안해!'
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }else {
                gohome();
            }
        })
    }else if(locheck == 3){
        money += 5000;
        localStorage.setItem("money", money);
        Swal.fire({
            title: '로또에 당첨되었습니다!',
            text: `5등 축하드립니다`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '다시하기',
            cancelButtonText: '나가기'
        }).then((result) => {
            if (result.isConfirmed) {

            } else {
                gohome();
            }
        })
    }else if(locheck == 4){
        money += 50000;
        localStorage.setItem("money", money);
        Swal.fire({
            title: '로또에 당첨되었습니다!',
            text: `4등 축하드립니다`,
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
    }else if(locheck == 5){
        money += 1500000;
        localStorage.setItem("money", money);
        Swal.fire({
            title: '로또에 당첨되었습니다!',
            text: `3등 축하드립니다`,
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
    }else if(locheck == 6 && speheck==1) {
        money += 55000000;
        localStorage.setItem("money", money);
        Swal.fire({
            title: '로또에 당첨되었습니다!',
            text: `2등 축하드립니다`,
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
    }else if (locheck == 6) {
        money += 1952160000;
        localStorage.setItem("money", money);
        Swal.fire({
            title: '로또에 당첨되었습니다!',
            text: `1등 축하드립니다`,
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
    }
}

function zmoney(){
    if (money == 0) {
        money = 1000000;
        localStorage.setItem("money", money);
        document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
    }
}
function gohome(){
    zmoney();
    window.location.href = "../../index.html";
}
function reset(){
    zmoney();
    location.reload();
}


