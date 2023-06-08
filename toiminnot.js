let energia = 0;
let laskuri = document.getElementById("laskuri");

var tuplapisteet = false;
var generaattori = false;
var ajastin = null;

function klikkaus(){
    // lisää energiaa
    if(tuplapisteet){
        if(arpa(1, 2)==1){
            energia -= 3;
        } else {
            energia += 1;
        }
    }
    energia += 1;
    laskuri.innerHTML = `Energian määrä: <b>${energia}</b>`;

    // tarkista energian riittävyys kertoimeen
    if(energia > 4 && tuplapisteet == false){
        document.getElementById("kerroinPäälle").style.display = "inline-block";
    }

    // tarkista energian riittävyys generaattoriin
    if(energia > 9 && generaattori == false){
        document.getElementById("genPäälle").style.display = "inline-block";
    }
}

function kerroinOn(){
    console.log("laitoit kertoimen päälle");
    tuplapisteet = true;
    document.getElementById("kerroinPäälle").style.display = "none";
    document.getElementById("kerroinPois").style.display = "inline-block";
}

function kerroinOff(){
    console.log("sammutit kertoimen");
    tuplapisteet = false;
    document.getElementById("kerroinPois").style.display = "none";
    document.getElementById("kerroinPäälle").style.display = "inline-block";
}

function genOn(){
    console.log("laitoit generaattorin päälle")
    generaattori = true;
    ajastin = setInterval(testi, 1000);
    document.getElementById("genPäälle").style.display = "none";
    document.getElementById("genPois").style.display = "inline-block";
}

function genOff(){
    console.log("sammutit generaattorin")
    generaattori = false;
    clearInterval(ajastin);
    document.getElementById("genPois").style.display = "none";
    document.getElementById("genPäälle").style.display = "inline-block";
}

function testi(){
    energia += 1;
    laskuri.innerHTML = `Energian määrä: <b>${energia}</b>`;
}

function arpa(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
