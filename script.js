/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
// const ENDPOINT = "./cars.json";

const vehicleCard = document.getElementById("output");

async function putInToDiv() {
  fetch("./cars.json")
    .then((response) => response.json())
    .then((result) => {
      data = result;

      vehicleCard.innerHTML = "";

      data.forEach((element) => {
        
        let cardWrapper = document.createElement("div");

        let carBrand = document.createElement("h3");
        carBrand.textContent = element.brand;

        let carModels = document.createElement("div");
        carModels.textContent = element.models;

        cardWrapper.append(carBrand, carModels);
        vehicleCard.append(cardWrapper);
      });
    })
    .catch((error) => console.error(error));
}

document.querySelector("button").addEventListener("click", putInToDiv);