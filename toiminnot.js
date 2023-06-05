let energia = 0;
let laskuri = document.getElementById("laskuri");

function klikkaus(){
    energia += 1;
    laskuri.innerHTML = `Energian määrä: <b>${energia}</b>`
}