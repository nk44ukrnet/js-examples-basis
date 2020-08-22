/*
function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.querySelector('#player'),
    coin = document.querySelector('#coin');

window.addEventListener('keyup',function (e) {
    if(e.key === 'ArrowDown' || e.key === 'Down') {
        moveVertical(avatar, 50);
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveVertical(avatar, -50);
    } else if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveHorisontal(avatar, 50);
        avatar.style.transform = 'scale(1,1)';
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveHorisontal(avatar, -50);
        avatar.style.transform = 'scale(-1,1)';
    }
    if(isTouching(avatar, coin)) {
        moveCoin();
    }
});
const moveVertical = (element, amount) => {
    const currTop = exctractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}
const moveHorisontal = (element, amount) => {
    const currLeft = exctractPos(element.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const exctractPos = (pos) => {
    if(!pos) return 10;
return parseInt(pos.slice(0,-2));
};
const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
};
moveCoin();*/
// const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggiesSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//    console.log('cc', creditCardInput.value);
//    console.log('terms', termsCheckbox.checked);
//    console.log('veggie', veggiesSelect.value);
// });
const formData = {}
/*
creditCardInput.addEventListener('input', (e) =>{
   formData['cc'] = e.target.value;
});
veggiesSelect.addEventListener('input', (e) =>{
   formData['veggie'] = e.target.value;
});
termsCheckbox.addEventListener('input', (e) =>{
    formData['agreeToTerms'] = e.target.checked;
});*/
for(let input of [creditCardInput, termsCheckbox, veggiesSelect]) {
    input.addEventListener('input', ({target}) =>{
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    })
}