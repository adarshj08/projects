let num=0
let guestnum= 0
function plusone(){
    num=num+1
    document.getElementById("home-score").textContent=num
}
function plustwo(){
    num=num+2
    document.getElementById("home-score").textContent=num
}
function plusthree(){
    num=num+3
    document.getElementById("home-score").textContent=num
}
function plus1(){
    guestnum=guestnum+1
    document.getElementById("guest-score").textContent=guestnum
}
function plus2(){
    guestnum=guestnum+2
    document.getElementById("guest-score").textContent=guestnum
}
function plus3(){
    guestnum=guestnum+3
    document.getElementById("guest-score").textContent=guestnum
}
function Reset(){
    num=0
    guestnum=0
    document.getElementById("home-score").textContent=0
    document.getElementById("guest-score").textContent=0
}

