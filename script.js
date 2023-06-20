function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //modo Condicional (If e Else)
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //}

  //modo toggle
  //html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //Substituir a img
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    // ser tiver sem light mode, manter img atual
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
