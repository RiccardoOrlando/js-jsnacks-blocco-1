let nomiinvitati = ["pippo", "franco", "stefanel", "marco", "ortello" ]
let nome = prompt("inserisci il tuo nome")
let noninvitato = false

for (let i = 0; i < nomiinvitati.length; i++){
    if (nomiinvitati[i] === nome){
        noninvitato = true
    }
}

if(noninvitato){
    console.log("puoi entrare sei invitato")
} else{
    console.log("non puoi entrare non sei invitato")
}