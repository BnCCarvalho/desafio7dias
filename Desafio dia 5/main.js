const itemName = document.getElementById("itemName");
const itemSector = document.getElementById("itemSector");
const itemQnt = document.getElementById("itemQnt");
const listaCompras = document.getElementById("listaCompras");

let shoppingList = [];
let sectors = [];

function handleAdd() {
  makeItem(itemName.value, itemSector.value, itemQnt.value);
  itemName.value = "";
  itemSector.value = "";
  itemQnt.value = "";
  printItems();
}

function makeItem(name, sector, qtd) {
  let item = {
    name: name,
    qtd: qtd,
    sector: sector,
  };
  shoppingList.push(item);
  addSector(item.sector);
}

function addSector(sec) {
  if (sectors.includes(sec) == false) {
    sectors.push(sec);
  }
}

function printItems() {
  listaCompras.innerHTML = "";

  for (let i = 0; i < sectors.length; i++) {
    let sectorDiv = document.createElement("div");
    sectorDiv.id = sectors[i];
    sectorDiv.innerHTML = `<h2>${sectors[i]}</h2>`;
    listaCompras.appendChild(sectorDiv);

    shoppingList.filter((element) => {
      if (element.sector == sectors[i]) {
        let listItem = document.createElement("input");
        listItem.type = "checkbox";
        listItem.id = `${element.name}`;
        listItem.value = `${element.qtd} ${element.name}`;
        let listLabel = document.createElement("label");
        listLabel.setAttribute("for", element.name);
        listLabel.innerHTML = `${element.qtd} ${element.name}`;
        let itemLocation = document.getElementById(element.sector);
        itemLocation.appendChild(listItem);
        itemLocation.appendChild(listLabel);
      }
    });
  }
}
