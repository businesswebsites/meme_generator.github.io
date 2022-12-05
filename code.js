
//meme generator komponenten
const generator = document.querySelector(".meme-generator .generator-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const meme_author = document.querySelector(".meme-author");
const meme_title = document.querySelector(".meme-generator .meme-title");

//meme generator funktion, um url, titel und autor zu übergeben
const updateDetails = (url, title, author) =>{
    memeImage.setAttribute("src", url);
    meme_title.innerHTML = title;
    meme_author.innerHTML = "Autor: " + author;
    console.log(title);
}

//api nutzen, um daten zu fetchen
const generateMeme = () =>{
    fetch("https://meme-api.com/gimme")
    .then((response)=> response.json())
    .then((data) =>{
            updateDetails(data.url, data.title, data.author);
        }
    )
}
//klick funktion für den button
generator.addEventListener("click", generateMeme);



