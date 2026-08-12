let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let newEl = document.getElementById("game-el")
let count1 = 12 
let count2 = 5

function homeone() {
count1 += 1
homeEl.innerText = count1
}

function hometwo() {
count1 += 2
homeEl.innerText = count1
}

function homethree() {
count1 += 3
homeEl.innerText = count1
}

function guestone() {
count2 += 1
guestEl.innerText = count2
}

function guesttwo() {
count2 += 2
guestEl.innerText = count2
}

function guestthree() {
count2 += 3
guestEl.innerText = count2
}

function newgame() {
    let game = count1 - 12 + count2 - 5
    homeEl.innerText = 0
    guestEl.innerText = 0
}