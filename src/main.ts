// Variables //
let puntuacion = 0;
const puntuacionHtml = document.getElementById("puntuacion");
const carta = document.getElementById("carta");
const dameCartaBoton = document.getElementById("dameCarta");
const plantarseBoton = document.getElementById("mePlanto");
const nuevaPartidaBoton = document.getElementById("nuevaPartida");
const mostrarMensajeHTML = document.getElementById("mostrarMensaje");
const supuestoBoton = document.getElementById("supuesto")

if (supuestoBoton !== null && supuestoBoton !== undefined && supuestoBoton instanceof HTMLButtonElement) {
    supuestoBoton.disabled = true
}

// Funciones //
function dameNumeroRandom() {
  return Math.floor(Math.random() * (9 + 1) + 1);
}

function dameNumeroCarta(numeroRandom: number): number {
  if (numeroRandom >= 8) {
    return numeroRandom + 2;
  } else {
    return numeroRandom;
  }
}

function dameURLCarta(numeroCarta: number): string {
  switch (numeroCarta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
}

function cambioCarta(URLCarta: string) {
  if (
    carta !== null &&
    carta !== undefined &&
    carta instanceof HTMLImageElement
  ) {
    carta.src = URLCarta;
  }
}

function dameCarta() {
  const numeroRandom = dameNumeroRandom();
  const numeroCarta = dameNumeroCarta(numeroRandom);
  const URLCarta = dameURLCarta(numeroCarta);
  puntuacion = damePuntuacion(numeroCarta);
  cambioCarta(URLCarta);
}

function muestraPuntuacion() {
  if (
    puntuacionHtml !== null &&
    puntuacionHtml !== undefined &&
    puntuacionHtml instanceof HTMLHeadingElement
  )
    puntuacionHtml.innerText = `Tienes ${puntuacion} puntos`;
}

function damePuntuacion(numeroCarta: number): number {
  if (numeroCarta > 7) {
    return puntuacion + 0.5;
  } else {
    return puntuacion + numeroCarta;
  }
}

function mensajeGameOver(): string {
  return "Game Over";
}

function mostrarMensaje(mensaje: string, puntuacion: number) {
  if (
    mostrarMensajeHTML !== null &&
    mostrarMensajeHTML !== undefined &&
    puntuacion > 7.5
  ) {
    mostrarMensajeHTML.innerText = mensaje;
  }
}

function desactivarBotonesVictoria() {
  if (
    puntuacion >= 7.5 &&
    dameCartaBoton !== null &&
    dameCartaBoton !== undefined &&
    dameCartaBoton instanceof HTMLButtonElement &&
    plantarseBoton !== null &&
    plantarseBoton !== undefined &&
    plantarseBoton instanceof HTMLButtonElement
  ) {
    dameCartaBoton.disabled = true;
    plantarseBoton.disabled = true;
  }
}

function gameOver() {
  const mensaje = mensajeGameOver();
  mostrarMensaje(mensaje, puntuacion);
  desactivarBotonesVictoria();
}

function victoria(puntuacion: number) {
  if (
    mostrarMensajeHTML !== null &&
    mostrarMensajeHTML !== undefined &&
    puntuacion === 7.5
  ) {
    mostrarMensajeHTML.innerText = "¡ Lo has clavado! ¡Enhorabuena!";
  }
}

function ejecutarEnBotonDameCarta() {
  dameCarta();
  muestraPuntuacion();
  gameOver();
  victoria(puntuacion);
}

function desactivarBotones() {
  if (
    dameCartaBoton !== null &&
    dameCartaBoton !== undefined &&
    dameCartaBoton instanceof HTMLButtonElement &&
    plantarseBoton !== null &&
    plantarseBoton !== undefined &&
    plantarseBoton instanceof HTMLButtonElement
  ) {
    dameCartaBoton.disabled = true;
    plantarseBoton.disabled = true;
  }
}

function mensajePlantarse(puntuacion: number) {
  if (puntuacion < 4) {
    return "Has sido muy conservador";
  }
  if (puntuacion < 6) {
    return "Te ha entrado el canguelo eh?";
  }
  if (puntuacion < 7.5) {
    return "Casi casi...";
  } else {
    return "";
  }
}

function mostrarMensajeAlPlantarse(mensajeAlPlantarse: string) {
  if (
    mostrarMensajeHTML !== null &&
    mostrarMensajeHTML !== undefined &&
    mostrarMensajeHTML instanceof HTMLHeadingElement
  ) {
    mostrarMensajeHTML.innerText = mensajeAlPlantarse;
  }
}

function activarBotonSupuesto() {
    if (supuestoBoton !== null && supuestoBoton !== undefined && supuestoBoton instanceof HTMLButtonElement) {
        supuestoBoton.disabled = false
    }
}

function ejecutarEnBotonPlantarse() {
  desactivarBotones();
  const mensajeAlPlantarse = mensajePlantarse(puntuacion);
  mostrarMensajeAlPlantarse(mensajeAlPlantarse);
  activarBotonSupuesto()
}

function reiniciarBotones() {
  if (
    plantarseBoton !== null &&
    plantarseBoton !== undefined &&
    plantarseBoton instanceof HTMLButtonElement &&
    dameCartaBoton !== null &&
    dameCartaBoton !== undefined &&
    dameCartaBoton instanceof HTMLButtonElement &&
    supuestoBoton !== null &&
    supuestoBoton !== undefined &&
    supuestoBoton instanceof HTMLButtonElement
  ) {
    dameCartaBoton.disabled = false;
    plantarseBoton.disabled = false;
    supuestoBoton.disabled = true
  }
}

function reiniciarPuntos() {
  puntuacion = 0;
}

function reiniciarMensaje() {
  if (
    mostrarMensajeHTML !== null &&
    mostrarMensajeHTML !== undefined &&
    mostrarMensajeHTML instanceof HTMLHeadingElement
  ) {
    mostrarMensajeHTML.innerText = "";
  }
}

function reiniciarCarta() {
  if (
    carta !== null &&
    carta !== undefined &&
    carta instanceof HTMLImageElement
  ) {
    carta.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
}

function ejecutarEnBotonNuevaPartida() {
  reiniciarBotones();
  reiniciarCarta();
  reiniciarMensaje();
  reiniciarPuntos();
  muestraPuntuacion()
}

function desactivarBotonSupuesto() {
    if (supuestoBoton !== null && supuestoBoton !== undefined && supuestoBoton instanceof HTMLButtonElement) {
        supuestoBoton.disabled = true
    }
}

function mensajeSupuesto(puntuacion : number) {
    if (puntuacion < 7.5) {
        return "No habrias ganado de todas formas si hubieras continuado"
    }
    if (puntuacion === 7.5) {
        return "Habrias ganado de haber continuado"
    }
    if (puntuacion > 7.5) {
        return "Habrias perdido de haber continuado"
    } else {
        return ""
    }
}

function mostrarMensajeSupuesto(mensajeSupuestoConst : string) {
    if (mostrarMensajeHTML !== null && mostrarMensajeHTML !== undefined && mostrarMensajeHTML instanceof HTMLHeadingElement) {
        mostrarMensajeHTML.innerText = mensajeSupuestoConst
    }
}

function ejectutarEnBotonSupuesto() {
    dameCarta();
    muestraPuntuacion()
    const mensajeSupuestoConst = mensajeSupuesto(puntuacion)
    mostrarMensajeSupuesto(mensajeSupuestoConst)
    desactivarBotonSupuesto()
}

// Ejecución //

if (
  dameCartaBoton !== null &&
  dameCartaBoton !== undefined &&
  dameCartaBoton instanceof HTMLButtonElement
) {
  dameCartaBoton.addEventListener("click", ejecutarEnBotonDameCarta);
}

if (
  plantarseBoton !== null &&
  plantarseBoton !== undefined &&
  plantarseBoton instanceof HTMLButtonElement
) {
  plantarseBoton.addEventListener("click", ejecutarEnBotonPlantarse);
}

if (
  nuevaPartidaBoton !== null &&
  nuevaPartidaBoton !== undefined &&
  nuevaPartidaBoton instanceof HTMLButtonElement
) {
  nuevaPartidaBoton.addEventListener("click", ejecutarEnBotonNuevaPartida);
}

if (
    supuestoBoton !== null &&
    supuestoBoton !== undefined &&
    supuestoBoton instanceof HTMLButtonElement
) {
    supuestoBoton.addEventListener("click", ejectutarEnBotonSupuesto)
}