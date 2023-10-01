let deal= document.getElementById("deal")
// add document. getelement at the top always , and addeventlister will always be at the bottom 
// capture the bottom ""
let hold= document.getElementById("hold")

let dealers=document.getElementById("dealer-Hand")

let player=document.getElementById("player-hand")


const Values =[ 'A', '2','3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'J', 'K' ]
const SUITS = ['','','','',]



//console.log(player,dealers)


let dealerCards = ""
let playcards = ""
// for every random element

function dealCards (){
    const randomElement = Values[Math.floor(Math.random() * Values.length)];
    playcards += randomElement
    //console.log("I work",deal)
    player.innerHTML= playcards
                        // add images later 

    const randomdealers = Values[Math.floor(Math.random() * Values.length)];
    dealerCards += randomdealers
    dealers.innerHTML=dealerCards

}

function playershand (){

    console.log("playershandworled",hold)
}




hold.addEventListener("click", playershand)
deal.addEventListener("click", dealCards);


// dealers move will be at the end 
// callimg the fuction is happening at the event listner 
// addeventlistener is working with buttoms on html 
