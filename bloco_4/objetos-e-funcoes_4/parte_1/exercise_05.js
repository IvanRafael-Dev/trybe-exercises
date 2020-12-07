let infoMargarida = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let infoTioPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

function concatenateObjects(obj1, obj2) {
  for (let properties in infoMargarida) {
    if (infoMargarida[properties] === infoMargarida.recorrente &&
      infoMargarida.recorrente === "Sim" &&
      infoTioPatinhas.recorrente === "Sim") {
      console.log("Ambos recorrentes");
    } else {
        console.log(infoMargarida[properties] + ' e ' + infoTioPatinhas[properties]);
    }
  }
}

concatenateObjects(infoMargarida, infoTioPatinhas);

