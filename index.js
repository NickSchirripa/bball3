let homeStoreEl =document.getElementById("homescore")
let guestScoreEl =document.getElementById("guestscore")

let homeScore = 0 
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}


function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}