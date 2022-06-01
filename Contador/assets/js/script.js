var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;



function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    valueNegative();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    valueNegative();
}

function valueZero() {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    

}

function valueNegative() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color= '#ff0000';
    }else{
        currentNumberWrapper.style.color= '#000000';
    }
   
}
