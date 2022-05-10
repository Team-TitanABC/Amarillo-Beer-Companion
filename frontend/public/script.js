

async function ButtonClicked() {
  try {
	const userInput = document.getElementById("userInput").value.split(" ").join("_")
	//console.log('userInput = ', userInput)
	const rawRes = await fetch('/search/Name/' + userInput)
	const json = await rawRes.json()
	console.log('the response from the server is: ', json)
	//document.getElementById('Name').innerText = json.name
	//document.getElementById('Style').innerText = ""
	
	const imageFile = json[0].Images
	

	//https://raw.githubusercontent.com/Team-TitanABC/Amarillo-Beer-Companion/main/PUBLIC/images/Beer/Shiner.png
	document.getElementById('imageElement' ).src = `https://github.com/Team-TitanABC/Amarillo-Beer-Companion/blob/main/frontend/public/images/beers/${json[0].Images}?raw=true`
	

	document.getElementById('Name').innerText = json[0].Name
	document.getElementById('Ingredients').innerText = json[0].Ingredients
	document.getElementById('Style').innerText = json[0].Style
	document.getElementById('Place').innerText = json[0].Place[0]
	document.getElementById('Placeone').innerText = json[0].Place[1]
	document.getElementById('Placetwo').innerText = json[0].Place[2]
	document.getElementById('Placethree').innerText = json[0].Place[3]
	document.getElementById('Placefour').innerText = json[0].Place[4]

	
	
	
	
	
	document.querySelector('.flip-card').style.display = 'block'

	document.getElementsByClassName('error')[0].innerText = ""
  }
  catch (err) {
	console.log(err)
	document.getElementsByClassName('error')[0].innerText = "Error!"
	document.querySelector(".error").innerText = "Error!."
  }
}

