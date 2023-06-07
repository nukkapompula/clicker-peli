let energia = 0;
let laskuri = document.getElementById("laskuri");

var tuplapisteet = false;

function klikkaus(){
    // lisää normaali määrä energiaa
    energia += 1;
    laskuri.innerHTML = `Energian määrä: <b>${energia}</b>`;

    // tarkista energian riittävyys kertoimeen
    if(energia > 4 && tuplapisteet == false){
        document.getElementById("kerroinPäälle").style.display = "inline-block";
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