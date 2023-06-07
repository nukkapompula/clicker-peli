let energia = 0;
let laskuri = document.getElementById("laskuri");

var tuplapisteet = false;

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
    if(energia > 9){
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
    let puserra = setInterval(arpa(1, 2), 1000);
    if(puserra==1){
        energia -= 1;
        laskuri.innerHTML = `Energian määrä: <b>${energia}</b>`;
    } else {
        energia += 1;
        laskuri.innerHTML = `Energian määrä: <b>${energia}</b>`;
    }
}

function arpa(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
