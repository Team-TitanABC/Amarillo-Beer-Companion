const searchBox = document.querySelector(".search-results")
const imageURLBase = 'https://github.com/Team-TitanABC/Amarillo-Beer-Companion/blob/main/frontend/public/images/beers/'
let beerCards = ""

const locationURLS = {
	georgiastreettaphouse: 'https://g.page/georgia-street-taphouse-amarillo?share',
	texasfirehousesports: 'https://g.page/TexasFirehouse?share',
	thebigtexan: 'https://goo.gl/maps/MyRbD9NmXjHLAdwH6'
}

async function ButtonClicked() {
  try {
	  console.log(locationURLS)
	  beerCards = "";
    const userInput = document
      .getElementById("userInput")
      .value.split(" ")
      .join("_")
    //console.log('userInput = ', userInput)
    const rawRes = await fetch("/search/Name/" + userInput);
    const json = await rawRes.json();
    console.log("the response from the server is: ", json);
    //document.getElementById('Name').innerText = json.name
    //document.getElementById('Style').innerText = ""
    // console.log(typeof json);
	const gmaps = 'https://maps.google.com'


    for (const [key, value] of Object.entries(json)) {
      console.log("name: ", value.Name);
	  let places = '';
	  
	  for (const [otherkey, othervalue] of Object.entries(value.Place)) {
		let strippedSpaces = othervalue.replace(/\s+/g, '').toLowerCase().trim()
		console.log(strippedSpaces)
		places += `<a href="${locationURLS[strippedSpaces] ? locationURLS[strippedSpaces] : gmaps}" target="_blank"><p class="Place">${othervalue}</p></a>`
	  }

      beerCards += `
					<div class="flip-card active">
						<div class="flip-card-inner">
							<div class="flip-card-front">
								
								<img src="${imageURLBase}${value.Images}?raw=true" class="imageElement" alt="beer" style="width:300px;height:460px;"></img>
								<h1 class="Name">${value.Name}</h1>
							</div>
							<div class="flip-card-back">
								<p class="Ingredients">${value.Ingredients}</p>
								<p class="Style">${value.Style}</p>
								${places}
								
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
	//console.log(beerCards)
    searchBox.innerHTML = beerCards

    document.getElementsByClassName("error")[0].innerText = "";
  } catch (err) {
    console.log(err);
    document.getElementsByClassName("error")[0].innerText = "Error!";
    document.querySelector(".error").innerText = "Error!.";
  }
}
