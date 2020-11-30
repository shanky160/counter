var num= document.querySelector(".num");
var number;

function increase() {
    number= num.innerText = parseInt(num.innerText)+1;
    if (number>0) {
        num.style.color= "green";
    } else if(number==0){
        num.style.color= "black";
    } else {
        num.style.color= "red";
    }
    return(number);
}

function reset() {
    number= num.innerText = 0;
    if (number>0) {
        num.style.color= "green";
    } else if(number==0){
        num.style.color= "black";
    } else {
        num.style.color= "red";
    }
    return (number);
}

function decrease() {
    number= num.innerText= parseInt(num.innerText)-1;
    if (number>0) {
        num.style.color= "green";
    } else if(number==0){
        num.style.color= "black";
    } else {
        num.style.color= "red";
    }
    return (number);
}

