
const searchBox = document.querySelector(".search-results")
const imageURLBase = 'https://github.com/Team-TitanABC/Amarillo-Beer-Companion/blob/main/frontend/public/images/beers/'
let beerCards = ""

const locationURLS = {
	georgiastreettaphouse: 'https://g.page/georgia-street-taphouse-amarillo?share',
	texasfirehousesports: 'https://g.page/TexasFirehouse?share',
	thebigtexan: 'https://goo.gl/maps/MyRbD9NmXjHLAdwH6',
  housedivide: 'https://goo.gl/maps/wKwqGgDdJ5k3sfNb8'
}

async function ButtonClicked(filter, input) {
  
  
  
  try {
	  console.log(locationURLS)

	  beerCards = "";
    if (input==="getUserInputFromHtml") input=document.getElementById("userInput").value
    const userInput = input.split(" ").join("_")
     
    const url = `/search/${filter}/${userInput}/`
    const rawRes = await fetch(url);
    const json = await rawRes.json();
    console.log("the response from the server is: ", json);


	const gmaps = 'https://maps.google.com'


    for (const [key, value] of Object.entries(json)) {
      console.log("name: ", value.Name);
	  let places = '';
	  
	  for (const [otherkey, othervalue] of Object.entries(value.Place)) {
		let strippedSpaces = othervalue.replace(/\s+/g, '').toLowerCase().trim()
		console.log(strippedSpaces)
		places += `<a href="${locationURLS[strippedSpaces] ? locationURLS[strippedSpaces] ? 'Walk-On"sSportsBistreaux' : gmaps : gmaps}" target="_blank"><p class="Place">${othervalue}</p></a>`
	  }

      beerCards += `
					<div class="flip-card active">
          
						<div class="flip-card-inner">
         
							<div class="flip-card-front">
								
								<img src="${imageURLBase}${value.Images}?raw=true" class="imageElement" alt="beer"></img>
								<h1 class="Name">${value.Name}</h1>
							</div>
							<div class="flip-card-back">
              <h2>Ingredients</h2>
								<p class="Ingredients">${value.Ingredients}</p>
                <h2>Style</h2>
								<p class="Style">${value.Style}</p>
            <strong> <h2>Places</h2></strong>
                <div class="pla">   
								${places}</div>
								
							</div>
						</div>
	
					</div>
		`
    }

    searchBox.innerHTML = beerCards

    document.getElementsByClassName("error")[0].innerText = "";
  } catch (err) {
    console.log(err);
    document.getElementsByClassName("error")[0].innerText = "Error!";
    document.querySelector(".error").innerText = "Error!.";
  }
}
