
let money = parseInt(localStorage.getItem("money"));
document.getElementById("money").innerHTML = `${money}`;
document.getElementById("baedang").innerHTML = `배당률 : ${localStorage.getItem("ranbae")}%`;
let bet = parseInt(localStorage.getItem("bet"));
if (isNaN(bet)) {
    Swal.fire({
        icon: 'error',
        title: '숫자만 적어주세요',
        text: 'must fill Number',
    })
    bet = 0;
    localStorage.setItem("bet",0);
}

function betting() {
    bet = parseInt(document.getElementById("bet").value);
    console.log(typeof bet)
    if (isNaN(bet)) {
        Swal.fire({
            icon: 'error',
            title: '숫자만 적어주세요',
            text: 'must fill Number',
        })
    } else {
        nobet();
    }
}
    function popcl() {
        opener.parent.location = "./holzzak/holzzak.html";
        opener.parent.location.reload();
        self.close();
    }

    function nobet() {

        if (bet > money) {
            Swal.fire({
                icon: 'error',
                title: '돈이 부족합니다',
                text: '남은 돈 이내로 제출하여 주십시오',
            })
        } else {
            money = money - bet;
            localStorage.setItem("money", money);
            var lb = parseInt(localStorage.getItem("bet"));
            bet = parseInt(bet) + lb;
            localStorage.setItem("bet", bet);
            money = localStorage.getItem("money");
            document.getElementById("money").innerHTML = `${money}`;
            popcl();
        }
    }
