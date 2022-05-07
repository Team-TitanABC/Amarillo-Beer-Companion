import './AboutUsPage.css'

function Top() {
return (
    <div className = "top">
    <a href = "#">home</a>
    <a href = "#"> contact</a>
    <a href = "#"> About</a>
</div>   
)
}

function YellowLine() {
    return(
        <div className = "yellowLine">

        </div>
    )
}

function Info() {
    return(
        <div class = "info">
        <div class="about">
            <h1><span id="aboutTitle">About</span></h1>
          
            <p><span id = "who">Who:</span> Gerardo Camorlinga Jr, David Wilson, Israel Galan, Orlando Ledezma</p>
         
            <p><span id = "what">What:</span>Web Design and Front/Backend Development</p>
         
            <p><span id = "where">Where:</span>Amarillo, TX</p>
            
            <p><span id = "when">When:</span>2021 - Present</p>

            <p><span id = "Why">Why:</span>To pursue a career as a Full-Stack Web Developer and Provide our services to local businesses.</p>
        </div>
        </div>
    )
}




export {Top, YellowLine, Info}

