const batteryLevel = 100
const isCharging = true

if (isCharging) {
  console.log(`Cargando (${batteryLevel}%)`)
} else if (!isCharging && batteryLevel <= 5) {
  console.log("Batería crítica: el móvil se apagará pronto")
} else if (!isCharging && batteryLevel <= 20) {
  console.log("Batería baja")
} else {
  console.log("Bateria correcta")
}

// Ejercicio 2

// 3 Variables
// 3 Textos diferentes
// 'TP' / '+12' / '+16' / '+18' / 'X'

function checkMovieEntrance(age, withAdult, rating) {
  if (rating === "TP") {
    console.log("Puede entrar")
  } else if (rating === "+12" && (age >= 12 || (age >= 7 && withAdult))) {
    console.log("puede entrar")
  } else if (rating === "+16" && age >= 16) {
    console.log("puede entrar")
  } else if (rating === "+18" && age >= 18) {
    console.log("puede entrar")
  } else if (
    rating !== "TP" &&
    rating !== "+12" &&
    rating !== "+16" &&
    rating !== "+18"
  ) {
    console.log("clasificación desconocida")
  } else {
    console.log("No puede entrar")
  }
}
checkMovieEntrance(10, false, 'TP')