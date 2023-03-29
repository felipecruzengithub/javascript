var article;
function solution(article) {
  switch (article) {
    case "computadora": {
      console.log("Con la computadora puedo programar usando JavaScript")
      break
    }
    case "celular": {
      console.log("En el celular puedo aprender a programar usando el block de notas")
      break
    }
    case "cable": {
      console.log("¡Hay un cable en mi bota!")
      break
    }
    default: {
      console.log("Artículo no encontrado:")
    }
  }
}

solution("computadora") //'¡Sigue!'