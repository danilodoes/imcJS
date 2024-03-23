

function calcular() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let calculoIMC = (peso / (altura * altura));
  console.log(Math.round(calculoIMC));
  let abaixo = document.getElementById("abaixo");
  let normal = document.getElementById("normal");
  let sobrepeso = document.getElementById("sobrepeso");
  let i = document.getElementById("i");
  let ii = document.getElementById("ii");
  let iii = document.getElementById("iii");

  if (calculoIMC <= 18.5) {
    abaixo.style = "color:white";
    normal.style = "color:black";
    sobrepeso.style = "color:black";
    i.style = "color:black";
    ii.style = "color:black";
    iii.style = "color:black";
    console.log("Abaixo do peso");

  }
  else if (calculoIMC > 18.5 && calculoIMC <= 24.9) {
    abaixo.style = "color:black";
    normal.style = "color:white";
    sobrepeso.style = "color:black";
    i.style = "color:black";
    ii.style = "color:black";
    iii.style = "color:black";
    console.log("Peso normal");
  }
  else if (calculoIMC >= 25 && calculoIMC <= 29.9) {
    abaixo.style = "color:black";
    normal.style = "color:black";
    sobrepeso.style = "color:white";
    i.style = "color:black";
    ii.style = "color:black";
    iii.style = "color:black";
    console.log("Sobrepeso");
  }
  else if (calculoIMC >= 30 && calculoIMC <= 34.9) {
    abaixo.style = "color:black";
    normal.style = "color:black";
    sobrepeso.style = "color:black";
    i.style = "color:white";
    ii.style = "color:black";
    iii.style = "color:black";
    console.log("Obesidade grau I");
  }
  else if (calculoIMC >= 35 && calculoIMC <= 39.9) {
    abaixo.style = "color:black";
    normal.style = "color:black";
    sobrepeso.style = "color:black";
    i.style = "color:black";
    ii.style = "color:white";
    iii.style = "color:black";
    console.log("Obesidade grau II");
  }
  else if (calculoIMC >= 40) {
    abaixo.style = "color:black";
    normal.style = "color:black";
    sobrepeso.style = "color:black";
    i.style = "color:black"
    ii.style = "color:black"
    iii.style = "color:white"
    console.log("Obesidade grau III");
  }
}






