const num1 = Number(prompt("inserisci il primo numero"))
const num2 =  Number(prompt("inserisci il secondo numero"))
if(num1 > num2) {
    alert("il primo numero è più grande del secondo")
}
else if(num2 > num1) {
    alert("il secondo numero è più grande del primo")
}
else{
    alert("i due numeri sono uguali")
}