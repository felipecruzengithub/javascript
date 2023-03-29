var imc = 15;
if (imc >= 30){
    console.log("Está obeso")
} else if (imc >= 25 && imc < 30 ){
    console.log("Usted tiene sobrepeso")
}
else if (imc >= 18.5 && imc < 25 ){
    console.log("Usted tiene peso normal")
}
else if (imc < 18.5 ){
    console.log("Usted tiene bajo peso")
}