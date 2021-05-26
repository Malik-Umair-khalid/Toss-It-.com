var player1 =   prompt("Write Player One Name")
var player2 =   prompt("Write Player Two Name")
var player1Choise   =   prompt("What is Player One Choise")
if(player1Choise.toLowerCase() === "heads"){
    var player2Choise = "tails"
}
else if(player1Choise.toLowerCase() === "tails"){
    var player2Choise = "heads"
}
else{
    alert("Invaled Choise !")
}
// console.log(player2Choise)
var toss = Math.round(Math.random())
console.log(toss)
document.write('<h1>' + 'Player One' + '</h1>' )
document.write('<h4>' + 'Name :' + player1 + '</h4>')
document.write('<h4>' +  'Choise :' + player1Choise + '</h4>')
document.write('<h2>' + 'Player Two' + '</h2>' )
document.write('<h4>' + 'Name :' + player2 + '</h4>')
document.write('<h4>' + 'Choise :' + player2Choise + '</h4>')

if(toss === 0){
        document.write("<h3>" + "Toss  Result" + "</h3>")
        document.write("<h4>" + player1 + "Won")
} 
else if (toss === 1){
    document.write("<h3>" + "Toss  Result" + "</h3>")
    document.write("<h4>" + player2 + " Won")
} 



