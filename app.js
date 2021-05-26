const meme = document.querySelectorAll('.get-meme');

console.log(meme)
console.log(data)
let memeToShow;
let alreadyHaveMeme = false;

let filter = ["lol", "meme", "star-wars", "cat", "images", "random", "dog" ]

const randomMeme = (memelist) => {
    memeToShow = memelist[Math.floor((Math.random()*memelist.length))].link;

    if (alreadyHaveMeme) {
        let memeDelete = document.querySelector(".meme-image");
        console.log(memeDelete)
        memeDelete.remove();
    }

    let areaToShow = document.querySelector(".result");
    let image = document.createElement('img');
    image.setAttribute("src", `${memeToShow}`)
    image.setAttribute("class", "meme-image")
    areaToShow.appendChild(image)
    alreadyHaveMeme = true;
}

const getMeme = (language) => {
    let memeIsPortuguese;
    let cx;
    let key = data.apiKey;
    let responseApi;


    if (language == "en") {
        console.log('Meme in english comming up!')
        memeIsPortuguese = false;
    } 

    if (language == "pt") {
        console.log('Meme in portuguese comming up!')
        memeIsPortuguese = true;
    }

    if (!memeIsPortuguese) {
        cx = data.searchEngineIdEn
    } else {
        cx = data.searchEngineIdPt
    }

    fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${filter[Math.floor((Math.random()*filter.length))]}&searchType=image`).then(function (response) {
        return response.json();
    }).then(function (data) {
        var value = data;
        responseApi = value.items
        console.log(randomMeme(responseApi), 'meme aleatorio')
        return value
    })

}


meme.forEach(element => {
    element.addEventListener( 'click', function ( ) {

        if (element.classList.contains('get-en-meme')) {
            getMeme("en")
        } 

        if (element.classList.contains('get-pt-meme')) {
            getMeme("pt")
        } 


    }, false );    
});




