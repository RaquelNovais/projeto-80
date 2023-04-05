var nomedaspessoas = [];
function enviar(){
var GuestName = document.getElementById("caixadetexto1").value;
nomedaspessoas.push(GuestName);
console.log (GuestName);
console.log(nomedaspessoas);
var comprimentodosnomes = nomedaspessoas.length;
console.log(comprimentodosnomes);
document.getElementById("resposta1").innerHTML = nomedaspessoas.toString();
}

function mostrar()
{
    var i = nomedaspessoas.join("<br>");
    console.log(nomedaspessoas);
    document.getElementById("resposta2").innerHTML=i.toString();
    document.getElementById("button3").style.display="block";
}

function sorting(){
    nomedaspessoas.sort();
    var i= nomedaspessoas.join("<br>");
    console.log(nomedaspessoas);
    document.getElementById("sorted").innerHTML=i.toString();
}