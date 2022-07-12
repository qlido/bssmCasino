let tmp = 1;
let numbers;

function decryptEffect(element, time) {
    const effect = setInterval(() => {
        element.innerText = Math.floor(Math.random() * 44 + 1);
    }, 10);

    setTimeout(() => {
        const random = Math.floor(Math.random() * numbers.length);

        clearInterval(effect);
        element.classList.add("done");
        element.innerText = numbers[random];
        numbers.splice(random, 1);
    }, time * 1000 + 1000);
}

function lottery() {
    document.querySelectorAll(".ball").forEach((element, index) => {
        element.classList.remove("done");
        decryptEffect(element, index);
    });
}

document.getElementById("btn").addEventListener("click", function () {
    if (tmp === 1) {
        numbers = Array.from({ length: 45 }, (_, i) => i + 1);
        tmp = 0;
        btn.classList.add("hide");
        lottery();
        setTimeout(function () {
            (tmp = 1), btn.classList.remove("hide");
        }, 7500);
    }
});