const searchBox = document.querySelector(".search-results");
const imageURLBase = 'https://github.com/Team-TitanABC/Amarillo-Beer-Companion/blob/main/frontend/public/images/beers/';
let beerCards = "";
async function ButtonClicked() {
  try {
	  beerCards = "";
    const userInput = document
      .getElementById("userInput")
      .value.split(" ")
      .join("_");
    //console.log('userInput = ', userInput)
    const rawRes = await fetch("/search/Name/" + userInput);
    const json = await rawRes.json();
    console.log("the response from the server is: ", json);
    //document.getElementById('Name').innerText = json.name
    //document.getElementById('Style').innerText = ""
    // console.log(typeof json);

    for (const [key, value] of Object.entries(json)) {
      console.log("name: ", value.Name);
      beerCards += `
					<div class="flip-card active">
						<div class="flip-card-inner">
							<div class="flip-card-front">
								<h1 class="Name">${value.Name}</h1>
								<img href="${imageURLBase}${value.Images}?raw=true" class="imageElement" alt="beer" style="width:300px;height:300px;"></img>
								<p class="error"></p>
							</div>
							<div class="flip-card-back">
								<p class="Ingredients"></p>
								<p class="Style"></p>
								<p class="Place"></p>
								<p class="Placeone"></p>
								<p class="Placetwo"></p>
								<p class="Placethree"></p>
								<p class="Placefour"></p>
							</div>
						</div>
	
					</div>
		`
    }

    //https://raw.githubusercontent.com/Team-TitanABC/Amarillo-Beer-Companion/main/PUBLIC/images/Beer/Shiner.png
    // document.getElementById('imageElement' ).src = `https://github.com/Team-TitanABC/Amarillo-Beer-Companion/blob/main/frontend/public/images/beers/${json[0].Images}?raw=true`

    // document.getElementById('Name').innerText = json[0].Name
    // document.getElementById('Ingredients').innerText = json[0].Ingredients
    // document.getElementById('Style').innerText = json[0].Style
    // document.getElementById('Place').innerText = json[0].Place[0]
    // document.getElementById('Placeone').innerText = json[0].Place[1]
    // document.getElementById('Placetwo').innerText = json[0].Place[2]
    // document.getElementById('Placethree').innerText = json[0].Place[3]
    // document.getElementById('Placefour').innerText = json[0].Place[4]
	console.log(beerCards)
    searchBox.innerHTML = beerCards;

    document.getElementsByClassName("error")[0].innerText = "";
  } catch (err) {
    console.log(err);
    document.getElementsByClassName("error")[0].innerText = "Error!";
    document.querySelector(".error").innerText = "Error!.";
  }
}
