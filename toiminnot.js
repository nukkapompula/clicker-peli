let energia = 0;
let laskuri = document.getElementById("laskuri");
let kerroinPainike = document.getElementsByClassName("kerroinPainike").length;

function klikkaus(){
    // lisää normaali määrä energiaa
    energia += 1;
    laskuri.innerHTML = `Energian määrä: <b>${energia}</b>`;

    // tarkista energian riittävyys kertoimeen
    if(energia>4){
        console.log("energiaa yli 5")
        document.getElementById("ostaKerroin").style.display = "inline-block";
    }
}