const elForm = document.querySelector("#form")
const elInput = elForm.querySelector("#input")
const elBtn = elForm.querySelector("#btn")
const elPersonScore = elForm.querySelector("#personScore")
const elBicycleScore = elForm.querySelector("#bicycleScore")
const elCarScore = elForm.querySelector("#carScore")
const elAirScore = elForm.querySelector("#airPlaneScore")

let PersonScore = 3.6;
let BicycleScore = 20.1;
let CarScore = 70;
let airScore = 800;

function timeScore(distance,speed){
    let hour = Math.floor(distance / speed)
    let minute = Math.floor((distance / speed - hour)* 60);
    let second = Math.floor(((distance / speed - hour)* 60 - minute)*60)
    return hour + " " + ' hour ' + minute + ' ' + ' minute ' + second + ' ' + ' second '
}


elForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    let inputValue = Number(elInput.value.trim())
    
    if(inputValue <= 0 || isNaN(inputValue)){
        elInput.classList.add('error_alert')
    }else{
        elInput.classList.add('done_alert')
        elPersonScore.textContent = timeScore(inputValue,PersonScore)
        elBicycleScore.textContent = timeScore(inputValue,BicycleScore)
        elCarScore.textContent = timeScore(inputValue,CarScore)
        elAirScore.textContent = timeScore(inputValue,airScore)
    }
})
