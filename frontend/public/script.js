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
	document.getElementById('imageElement').src = `https://github.com/Team-TitanABC/Amarillo-Beer-Companion/blob/main/PUBLIC/images/Beer/${json[0].Images}?raw=true`
	document.getElementsByClassName('error')[0].innerText = ""
  }
  catch (err) {
	console.log(err)
	document.getElementsByClassName('error')[0].innerText = "Error!"
	document.querySelector(".error").innerText = "Error!."
  }
}

