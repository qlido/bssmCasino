
let money = parseInt(localStorage.getItem("money"));
document.getElementById("money").innerHTML = `${money}`;
document.getElementById("baedang").innerHTML = `배당률 : ${localStorage.getItem("ranbae")}%`;


function betting(){
    if(bet>0) {
        bet = document.getElementById("bet").value;
        if (bet > money) {
            alert("돈이 부족합니다.");
        } else {
            money = money - bet;
            localStorage.setItem("money", money);
            localStorage.setItem("bet", bet);
            money = localStorage.getItem("money");
            document.getElementById("money").innerHTML = `${money}`;
        }
    }else {
        let bet = document.getElementById("bet").value;
        if (bet > money) {
            alert("돈이 부족합니다.");
        } else {
            money = money - bet;
            localStorage.setItem("money", money);
            var lb = parseInt(localStorage.getItem("bet"));
            bet = parseInt(bet)+lb;
            localStorage.setItem("bet", bet);
            money = localStorage.getItem("money");
            document.getElementById("money").innerHTML = `${money}`;
            popcl();
        }
    }
}
function popcl(){
    opener.parent.location="./holzzak/holzzak.html"
    self.close();
}
