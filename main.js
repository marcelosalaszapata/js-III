const miArray = ["mama", "padre", "hermano", "sobrina", "amigo"];

function datos() {
  let escribe = document.getElementById("escribe algo").value;

  let h1 = document.createElement("h1");
  let h1Texto = document.createTextNode(miArray);
  h1.appendChild(h1Texto);

  miArray.shift();

  let pc = miArray.length;
  document.getElementById("valor").innerHTML = pc;

  valor.appendChild(h1);
}
