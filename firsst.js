let money;
if(localStorage.getItem("money")==null){
    localStorage.setItem("money","1000000");
     money= parseInt(localStorage.getItem("money"));
    document.getElementById("moneyshow").innerHTML = `<h1 id="money">현재: ${money}</h1>`;
}else {
     money = parseInt(localStorage.getItem("money"));
    document.getElementById("moneyshow").innerHTML = `<h1 id="money">${money}원 보유중</h1>`;
}
function gameOn(eventobj){
    let evid = eventobj.id;
    console.log(evid);
    location.href = `./game/${evid}/${evid}.html`;
}