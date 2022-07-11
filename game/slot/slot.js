const btn = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const el1 = document.querySelector('#slot1');
const el2 = document.querySelector('#slot2');
const el3 = document.querySelector('#slot3');

let count = 0;

const mCasino1 = new SlotMachine(el1, {
    active: 0,
    delay: 500
});
const mCasino2 = new SlotMachine(el2, {
    active: 1,
    delay: 500,
    randomize() {
        return this.nextIndex;
    }
});
const mCasino3 = new SlotMachine(el3, {
    active: 2,
    delay: 500,
    direction: 'down'
});
btn.addEventListener('click', () => {
    count = 3;
    mCasino1.shuffle(99999, );
    mCasino2.shuffle(99999);
    mCasino3.shuffle(99999);
});

btnStop.addEventListener('click', () => {
    switch (count) {
        case 3:
            mCasino1.stop();
            break;
        case 2:
            mCasino2.stop();
            break;
        case 1:
            mCasino3.stop();
            break;
    }
    count--;
});