let energia = 0;
let laskuri = document.getElementById("laskuri");
let kerroinPainike = document.getElementsByClassName("kerroinPainike").length;

function klikkaus(){
    energia += 1;
    laskuri.innerHTML = `Energian määrä: <b>${energia}</b>`;
}

if(energia>4){
    console.log("energiaa yli 5")
    for(indeksi=0; indeksi<kerroinPainike; indeksi++){
        document.getElementsByClassName("kerroinPainike")[indeksi].style.display = "inline-block";
    }
}