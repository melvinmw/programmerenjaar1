console.log('het werkt');

var naamElement = document.querySelector("#naam");
var prijsElement = document.querySelector("#prijs");
var autoElement = document.querySelector(".autoimage");
var nummerElement = document.querySelector("#nummer");

// auto een waarde geven. 
var nummer = 1;

var verderElement = document.querySelector("#verder");

var audiAudio = document.querySelector("#audigeluid");
var mercedesAudio = document.querySelector("#mercedesgeluid");
var bmwAudio = document.querySelector("#bmwgeluid");

var betalenElement = document.querySelector("#betalen");

var bodyElement = document.querySelector ("body");

function verderKnop (){
    console.log("verder");

    //nieuw = oud + 1
    nummer = nummer + 1;

    nummerElement.textContent = nummer;

    if(nummer == 1){
        console.log("audi");
        naamElement.textContent = "Audi";
        prijsElement.textContent = "$40000";
        autoElement.src = "img/audi.png";
    }

    if(nummer == 2){
        console.log("mercedes");
        naamElement.textContent = "Mercedes";
        prijsElement.textContent = "$50000";
        autoElement.src = "img/mercedes.png";
    }

    if(nummer == 3){
        console.log("bmw");
        naamElement.textContent = "BMW";
        prijsElement.textContent = "$60000";
        autoElement.src = "img/bmw.png";
        nummer = 0;
        //terug naar begin
    }
}

function auto() {
    console.log("auto klik");
    if(nummer == 1){
        audiAudio.play(); 
    }
    if(nummer == 2){
        mercedesAudio.play();
    }

    //nummer 0: zie regel 48
    if (nummer == 0){
    bmwAudio.play();
    }
}

function betalenKnop (){
    console.log("je hebt betaald");
    bodyElement.classList.add("betalen");
}

verderElement.addEventListener("click", verderKnop);
betalenElement.addEventListener("click", betalenKnop);
autoElement.addEventListener("click", auto);